/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

// Debug timing instrumentation for React Fizz (Server Rendering)

// ============================================================================
// TIMING OUTPUT CONTROLS
// ============================================================================

const DEBUG_TIMING_ENABLED = true;
const LOG_RENDER_START = true;
const LOG_COMPONENT_RENDERS = true;
const LOG_CHUNKS = true;

// ============================================================================
// STATE TRACKING
// ============================================================================

let renderCount = 0;
let currentRenderStart = 0;
let componentCount = 0;
let chunkCount = 0;
let totalBytes = 0;

export function logServerRenderStart(): void {
  renderCount++;
  currentRenderStart = performance.now();
  componentCount = 0;
  chunkCount = 0;
  totalBytes = 0;

  if (!DEBUG_TIMING_ENABLED || !LOG_RENDER_START) return;
  console.log(
    `%c[Fizz Timing] Server Render #${renderCount} START`,
    'color: #e91e63; font-weight: bold;'
  );
}

export function logServerRenderComplete(): void {
  if (!DEBUG_TIMING_ENABLED || !LOG_RENDER_START) return;
  const duration = performance.now() - currentRenderStart;
  console.log(
    `%c[Fizz Timing] Server Render #${renderCount} COMPLETE`,
    'color: #e91e63; font-weight: bold;'
  );
  console.log(
    `%c[Fizz Timing] ─────────────────────────────────`,
    'color: #888;'
  );
  console.log(
    `%c[Fizz Timing] Summary:`,
    'color: #4caf50; font-weight: bold;'
  );
  console.log(
    `%c[Fizz Timing]   Duration:    ${duration.toFixed(2)}ms`,
    'color: #4caf50;'
  );
  console.log(
    `%c[Fizz Timing]   Components:  ${componentCount}`,
    'color: #4caf50;'
  );
  console.log(
    `%c[Fizz Timing]   Chunks:      ${chunkCount}`,
    'color: #4caf50;'
  );
  console.log(
    `%c[Fizz Timing]   Total bytes: ${totalBytes}`,
    'color: #4caf50;'
  );
  console.log(
    `%c[Fizz Timing] ─────────────────────────────────`,
    'color: #888;'
  );
}

export function logComponentRender(componentName: string | null): void {
  componentCount++;
  if (!DEBUG_TIMING_ENABLED || !LOG_COMPONENT_RENDERS) return;
  const name = componentName || 'Anonymous';
  console.log(
    `%c[Fizz Timing]   Render: ${name}`,
    'color: #2196f3;'
  );
}

export function logChunkEmitted(bytes: number): void {
  chunkCount++;
  totalBytes += bytes;
  if (!DEBUG_TIMING_ENABLED || !LOG_CHUNKS) return;
  console.log(
    `%c[Fizz Timing]   Chunk #${chunkCount}: ${bytes} bytes (total: ${totalBytes})`,
    'color: #ff9800;'
  );
}

export function logSuspenseBoundaryStart(id: number): void {
  if (!DEBUG_TIMING_ENABLED) return;
  console.log(
    `%c[Fizz Timing]   Suspense boundary #${id} START`,
    'color: #9c27b0;'
  );
}

export function logSuspenseBoundaryComplete(id: number): void {
  if (!DEBUG_TIMING_ENABLED) return;
  console.log(
    `%c[Fizz Timing]   Suspense boundary #${id} COMPLETE`,
    'color: #9c27b0;'
  );
}
