/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

// Debug timing instrumentation for React lifecycle phases

// ============================================================================
// RENDER/COMMIT TRACKING (existing)
// ============================================================================

let renderCount = 0;
let currentRenderStart = 0;
let currentCommitStart = 0;
let isInitialMount = true;

export function logRenderStart(isSync: boolean): void {
  renderCount++;
  currentRenderStart = performance.now();
  console.log(
    `%c[React Timing] Render #${renderCount} START ${isSync ? '(sync)' : '(concurrent)'}`,
    'color: #61dafb; font-weight: bold;'
  );
}

export function logRenderComplete(): void {
  const duration = performance.now() - currentRenderStart;
  console.log(
    `%c[React Timing] Render #${renderCount} COMPLETE: ${duration.toFixed(2)}ms`,
    'color: #61dafb;'
  );
}

export function logCommitStart(): void {
  currentCommitStart = performance.now();
  const phase = isInitialMount ? 'MOUNT' : 'UPDATE';
  console.log(
    `%c[React Timing] Commit #${renderCount} START (${phase})`,
    'color: #f0db4f; font-weight: bold;'
  );
}

export function logCommitComplete(): void {
  const commitDuration = performance.now() - currentCommitStart;
  const totalDuration = performance.now() - currentRenderStart;
  const phase = isInitialMount ? 'MOUNT' : 'UPDATE';

  console.log(
    `%c[React Timing] Commit #${renderCount} COMPLETE (${phase})`,
    'color: #f0db4f;'
  );
  console.log(
    `%c[React Timing] ─────────────────────────────────`,
    'color: #888;'
  );
  console.log(
    `%c[React Timing] Summary #${renderCount}:`,
    'color: #4caf50; font-weight: bold;'
  );
  console.log(
    `%c[React Timing]   Phase: ${phase}`,
    'color: #4caf50;'
  );
  console.log(
    `%c[React Timing]   Render: ${(totalDuration - commitDuration).toFixed(2)}ms`,
    'color: #4caf50;'
  );
  console.log(
    `%c[React Timing]   Commit: ${commitDuration.toFixed(2)}ms`,
    'color: #4caf50;'
  );
  console.log(
    `%c[React Timing]   Total:  ${totalDuration.toFixed(2)}ms`,
    'color: #4caf50; font-weight: bold;'
  );
  console.log(
    `%c[React Timing] ─────────────────────────────────`,
    'color: #888;'
  );

  // After first commit, subsequent ones are updates
  isInitialMount = false;
}

export function logBeginWork(fiberTag: number, fiberType: mixed): void {
  // Only log in verbose mode - uncomment if needed
  // const typeName = typeof fiberType === 'function' ? fiberType.name || 'Anonymous' : String(fiberType);
  // console.log(`[React Timing]   beginWork: ${typeName}`);
}

export function logCompleteWork(fiberTag: number, fiberType: mixed): void {
  // Only log in verbose mode - uncomment if needed
  // const typeName = typeof fiberType === 'function' ? fiberType.name || 'Anonymous' : String(fiberType);
  // console.log(`[React Timing]   completeWork: ${typeName}`);
}

// Reset for new root
export function resetTimingForNewRoot(): void {
  isInitialMount = true;
}

// ============================================================================
// UPDATE TRACKING (new)
// ============================================================================

// Types for suspended reasons (must match ReactFiberWorkLoop)
export opaque type SuspendedReason = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// Global update counter
let updateIdCounter = 0;

// Track active updates: Map of updateId -> update info
type UpdateInfo = {
  id: number,
  priority: string,
  lanes: number,
  startTime: number,
  status: 'scheduled' | 'rendering' | 'suspended' | 'yielded' | 'committed',
  suspendCount: number,
  yieldCount: number,
  interruptCount: number,
  componentRenderCounts: Map<string, number>,
};

const activeUpdates: Map<number, UpdateInfo> = new Map();

// Current update being processed (for correlating events)
let currentUpdateId: number | null = null;

// Current lanes being rendered (for component tracking)
let currentRenderingLanes: number = 0;

// Lane to priority name mapping
function getLanePriorityName(lanes: number): string {
  // Lane bit positions (from ReactFiberLane.js)
  const SyncLane = 0b0000000000000000000000000000010;
  const InputContinuousLane = 0b0000000000000000000000000001000;
  const DefaultLane = 0b0000000000000000000000000100000;
  const TransitionLanes = 0b0000000001111111111111100000000;
  const RetryLanes = 0b0000011110000000000000000000000;
  const IdleLane = 0b0100000000000000000000000000000;
  const OffscreenLane = 0b1000000000000000000000000000000;

  if (lanes & SyncLane) return 'SYNC (highest)';
  if (lanes & InputContinuousLane) return 'INPUT_CONTINUOUS (high)';
  if (lanes & DefaultLane) return 'DEFAULT (normal)';
  if (lanes & TransitionLanes) return 'TRANSITION (low)';
  if (lanes & RetryLanes) return 'RETRY (low)';
  if (lanes & IdleLane) return 'IDLE (lowest)';
  if (lanes & OffscreenLane) return 'OFFSCREEN';
  return `UNKNOWN (0b${lanes.toString(2)})`;
}

function getSuspendedReasonName(reason: SuspendedReason): string {
  switch (reason) {
    case 0: return 'NotSuspended';
    case 1: return 'SuspendedOnError';
    case 2: return 'SuspendedOnData';
    case 3: return 'SuspendedOnImmediate';
    case 4: return 'SuspendedOnInstance';
    case 5: return 'SuspendedOnInstanceAndReadyToContinue';
    case 6: return 'SuspendedOnDeprecatedThrowPromise';
    case 7: return 'SuspendedAndReadyToContinue';
    case 8: return 'SuspendedOnHydration';
    case 9: return 'SuspendedOnAction';
    default: return `Unknown(${reason})`;
  }
}

// Called when a new update is scheduled (scheduleUpdateOnFiber)
export function logUpdateScheduled(lanes: number): number {
  const id = ++updateIdCounter;
  const priority = getLanePriorityName(lanes);

  const info: UpdateInfo = {
    id,
    priority,
    lanes,
    startTime: performance.now(),
    status: 'scheduled',
    suspendCount: 0,
    yieldCount: 0,
    interruptCount: 0,
    componentRenderCounts: new Map(),
  };

  activeUpdates.set(id, info);

  console.log(
    `%c[Update #${id}] SCHEDULED %c${priority}`,
    'color: #9c27b0; font-weight: bold;',
    'color: #e91e63; font-weight: bold;'
  );
  console.log(
    `%c[Update #${id}]   lanes: 0b${lanes.toString(2).padStart(31, '0')}`,
    'color: #9c27b0;'
  );

  return id;
}

// Called when an update starts rendering
export function logUpdateRenderStart(lanes: number): void {
  // Set current lanes for component tracking
  currentRenderingLanes = lanes;

  // Find or create update for these lanes
  let update: UpdateInfo | null = null;
  for (const [id, info] of activeUpdates) {
    if (info.lanes === lanes && info.status !== 'committed') {
      update = info;
      currentUpdateId = id;
      break;
    }
  }

  if (!update) {
    // This might be a continuation, create a tracking entry
    const id = ++updateIdCounter;
    update = {
      id,
      priority: getLanePriorityName(lanes),
      lanes,
      startTime: performance.now(),
      status: 'rendering',
      suspendCount: 0,
      yieldCount: 0,
      interruptCount: 0,
      componentRenderCounts: new Map(),
    };
    activeUpdates.set(id, update);
    currentUpdateId = id;
  }

  update.status = 'rendering';

  console.log(
    `%c[Update #${update.id}] RENDER_START %c${update.priority}`,
    'color: #2196f3; font-weight: bold;',
    'color: #e91e63;'
  );
}

// Called when render is interrupted by a higher priority update
export function logUpdateInterrupted(lanes: number, newLanes: number): void {
  const update = findUpdateByLanes(lanes);
  if (update) {
    update.interruptCount++;
    update.status = 'scheduled'; // Back to scheduled, will be retried

    console.log(
      `%c[Update #${update.id}] INTERRUPTED %c(preempted by higher priority)`,
      'color: #ff5722; font-weight: bold;',
      'color: #ff9800;'
    );
    console.log(
      `%c[Update #${update.id}]   was: ${update.priority}`,
      'color: #ff5722;'
    );
    console.log(
      `%c[Update #${update.id}]   by:  ${getLanePriorityName(newLanes)}`,
      'color: #ff5722;'
    );
    console.log(
      `%c[Update #${update.id}]   interrupt count: ${update.interruptCount}`,
      'color: #ff5722;'
    );
  }
}

// Called when render yields to the main thread (concurrent mode)
export function logUpdateYielded(lanes: number): void {
  const update = findUpdateByLanes(lanes);
  if (update) {
    update.yieldCount++;
    update.status = 'yielded';

    console.log(
      `%c[Update #${update.id}] YIELDED %c(giving control to main thread)`,
      'color: #ff9800; font-weight: bold;',
      'color: #ffc107;'
    );
    console.log(
      `%c[Update #${update.id}]   yield count: ${update.yieldCount}`,
      'color: #ff9800;'
    );
  }
}

// Called when a yielded render resumes
export function logUpdateResumed(lanes: number): void {
  const update = findUpdateByLanes(lanes);
  if (update) {
    update.status = 'rendering';

    console.log(
      `%c[Update #${update.id}] RESUMED %c(continuing render)`,
      'color: #4caf50; font-weight: bold;',
      'color: #8bc34a;'
    );
  }
}

// Called when render suspends (waiting for data)
export function logUpdateSuspended(lanes: number, reason: SuspendedReason): void {
  const update = findUpdateByLanes(lanes);
  if (update) {
    update.suspendCount++;
    update.status = 'suspended';

    const reasonName = getSuspendedReasonName(reason);

    console.log(
      `%c[Update #${update.id}] SUSPENDED %c${reasonName}`,
      'color: #9c27b0; font-weight: bold;',
      'color: #ce93d8;'
    );
    console.log(
      `%c[Update #${update.id}]   suspend count: ${update.suspendCount}`,
      'color: #9c27b0;'
    );
    console.log(
      `%c[Update #${update.id}]   waiting for async data...`,
      'color: #9c27b0; font-style: italic;'
    );
  }
}

// Called when a suspended render is pinged (data arrived)
export function logUpdatePinged(lanes: number): void {
  const update = findUpdateByLanes(lanes);
  if (update) {
    console.log(
      `%c[Update #${update.id}] PINGED %c(data arrived, ready to retry)`,
      'color: #00bcd4; font-weight: bold;',
      'color: #4dd0e1;'
    );
  }
}

// Called when an update completes to DOM
export function logUpdateCommitted(lanes: number): void {
  const update = findUpdateByLanes(lanes);
  if (update) {
    const duration = performance.now() - update.startTime;
    update.status = 'committed';

    console.log(
      `%c[Update #${update.id}] COMMITTED TO DOM`,
      'color: #4caf50; font-weight: bold;'
    );
    console.log(
      `%c[Update #${update.id}] ═══════════════════════════════════════`,
      'color: #888;'
    );
    console.log(
      `%c[Update #${update.id}] Summary:`,
      'color: #4caf50; font-weight: bold;'
    );
    console.log(
      `%c[Update #${update.id}]   Priority:    ${update.priority}`,
      'color: #4caf50;'
    );
    console.log(
      `%c[Update #${update.id}]   Total time:  ${duration.toFixed(2)}ms`,
      'color: #4caf50;'
    );
    console.log(
      `%c[Update #${update.id}]   Suspends:    ${update.suspendCount}`,
      'color: #4caf50;'
    );
    console.log(
      `%c[Update #${update.id}]   Yields:      ${update.yieldCount}`,
      'color: #4caf50;'
    );
    console.log(
      `%c[Update #${update.id}]   Interrupts:  ${update.interruptCount}`,
      'color: #4caf50;'
    );

    // Log component render counts
    logComponentRenderSummary(update);

    console.log(
      `%c[Update #${update.id}] ═══════════════════════════════════════`,
      'color: #888;'
    );

    // Clean up completed update
    activeUpdates.delete(update.id);
  }
}

// Called when prepareFreshStack is called (indicates restart/rebase)
export function logUpdateRestarted(oldLanes: number, newLanes: number): void {
  if (oldLanes !== 0 && oldLanes !== newLanes) {
    const oldUpdate = findUpdateByLanes(oldLanes);
    if (oldUpdate) {
      console.log(
        `%c[Update #${oldUpdate.id}] RESTARTED/REBASED`,
        'color: #ff5722; font-weight: bold;'
      );
      console.log(
        `%c[Update #${oldUpdate.id}]   old lanes: 0b${oldLanes.toString(2).padStart(31, '0')}`,
        'color: #ff5722;'
      );
      console.log(
        `%c[Update #${oldUpdate.id}]   new lanes: 0b${newLanes.toString(2).padStart(31, '0')}`,
        'color: #ff5722;'
      );
    }
  }
}

// Helper to find update by lanes
function findUpdateByLanes(lanes: number): UpdateInfo | null {
  for (const [id, info] of activeUpdates) {
    if (info.lanes === lanes) {
      return info;
    }
  }
  return null;
}

// Get current active update count (for debugging)
export function getActiveUpdateCount(): number {
  return activeUpdates.size;
}

// ============================================================================
// COMPONENT RENDER TRACKING
// ============================================================================

// Start tracking component renders for a new render cycle
// (clears the counts for the current update)
export function startTrackingComponentRenders(): void {
  // Find update for current lanes and clear its component counts
  const update = findUpdateByLanes(currentRenderingLanes);
  if (update) {
    update.componentRenderCounts.clear();
  }
}

// Record that a component was rendered
export function logComponentRender(componentName: string | null): void {
  // Find the current update and add to its component counts
  const update = findUpdateByLanes(currentRenderingLanes);
  if (update) {
    const name = componentName || 'Anonymous';
    const count = update.componentRenderCounts.get(name) || 0;
    update.componentRenderCounts.set(name, count + 1);
  }
}

// Log summary of component renders (called from logUpdateCommitted)
function logComponentRenderSummary(update: UpdateInfo): void {
  const componentCounts = update.componentRenderCounts;
  if (componentCounts.size === 0) return;

  // Sort by count (descending) then by name
  const sorted = Array.from(componentCounts.entries()).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return a[0].localeCompare(b[0]);
  });

  const total = sorted.reduce((sum, [, count]) => sum + count, 0);

  console.log(
    `%c[Update #${update.id}]   Components: ${total} rendered`,
    'color: #00bcd4; font-weight: bold;'
  );

  // Print each component with its count
  for (const [name, count] of sorted) {
    const bar = '█'.repeat(Math.min(count, 20));
    console.log(
      `%c[Update #${update.id}]     ${name}: ${count} ${bar}`,
      'color: #00bcd4;'
    );
  }
}

// Stop tracking (kept for compatibility)
export function stopTrackingComponentRenders(): void {
  // Summary is now logged in logUpdateCommitted
}
