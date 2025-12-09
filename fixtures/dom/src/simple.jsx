import React, { Suspense, useState, useTransition, use } from 'react';
import ReactDOM from 'react-dom/client';

// ============================================================================
// DEMO: Update Priority and Suspense/Resume Tracking
// Open the console to see detailed logs about React's update lifecycle
// ============================================================================

// Fake async data fetcher that creates a promise
function createResource(id, delay = 1000) {
  let status = 'pending';
  let result;
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      result = `Data for item ${id} (loaded after ${delay}ms)`;
      status = 'fulfilled';
      resolve(result);
    }, delay);
  }).then((r) => {
    return r;
  });

  // Simple resource for `use` hook
  return promise;
}

// Component that uses async data with `use` hook
function AsyncItem({ id, delay }) {
  const data = use(createResource(id, delay));
  return <div style={{ padding: '10px', background: '#e3f2fd', margin: '5px 0' }}>{data}</div>;
}

// Slow rendering component to demonstrate yielding
function SlowList({ count, num }) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(<SlowItem key={i} index={i} num={num} />);
  }
  return <ul style={{ maxHeight: '200px', overflow: 'auto' }}>{items}</ul>;
}

function SlowItem({ index, num }) {
  // Simulate expensive rendering
  for (let i = 0; i < 5000; i++) {
    window.x = Math.random();
  }
  return (
    <li style={{ fontSize: '12px' }}>
      Item {index}: value={num}
    </li>
  );
}

// Cache for suspense resources
const resourceCache = new Map();
function getResource(id, delay) {
  const key = `${id}-${delay}`;
  if (!resourceCache.has(key)) {
    resourceCache.set(key, createResource(id, delay));
  }
  return resourceCache.get(key);
}

// Component that suspends on data
function SuspendingData({ id, delay }) {
  const data = use(getResource(id, delay));
  return (
    <div style={{ padding: '10px', background: '#c8e6c9', margin: '5px 0', borderRadius: '4px' }}>
      {data}
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const [slowValue, setSlowValue] = useState(0);
  const [showSuspense, setShowSuspense] = useState(false);
  const [suspenseId, setSuspenseId] = useState(1);
  const [isPending, startTransition] = useTransition();

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '800px' }}>
      <h1>React Update Tracking Demo</h1>
      <p style={{ color: '#666' }}>Open DevTools Console to see update lifecycle logs</p>

      <div style={{ marginBottom: '20px', padding: '15px', background: '#fff3e0', borderRadius: '8px' }}>
        <h2>1. Sync Updates (Highest Priority)</h2>
        <p>These updates happen immediately:</p>
        <button
          onClick={() => setCount(c => c + 1)}
          style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px' }}
        >
          Sync Count: {count}
        </button>
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', background: '#e8f5e9', borderRadius: '8px' }}>
        <h2>2. Transition Updates (Low Priority)</h2>
        <p>Type quickly to see how low-priority updates can be interrupted:</p>
        <input
          type="range"
          min="0"
          max="100"
          value={slowValue}
          onChange={(e) => {
            startTransition(() => {
              setSlowValue(parseInt(e.target.value));
            });
          }}
          style={{ width: '100%' }}
        />
        <p>Value: {slowValue} {isPending && <span style={{ color: '#ff9800' }}>(updating...)</span>}</p>
        <SlowList count={50} num={slowValue} />
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', background: '#e3f2fd', borderRadius: '8px' }}>
        <h2>3. Suspense (Data Loading)</h2>
        <p>Click to load async data and watch the suspend/resume cycle:</p>
        <button
          onClick={() => {
            resourceCache.clear(); // Clear cache to force new fetch
            setSuspenseId(id => id + 1);
            setShowSuspense(true);
          }}
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          Load Async Data (ID: {suspenseId})
        </button>
        {showSuspense && (
          <Suspense fallback={<div style={{ padding: '10px', color: '#1976d2' }}>Loading data...</div>}>
            <SuspendingData id={suspenseId} delay={2000} />
          </Suspense>
        )}
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', background: '#fce4ec', borderRadius: '8px' }}>
        <h2>4. Interrupt Demo</h2>
        <p>Click "Start Slow Update" then quickly click "Interrupt" to see priority preemption:</p>
        <button
          onClick={() => {
            startTransition(() => {
              // This will be slow and can be interrupted
              setSlowValue(v => v + 10);
            });
          }}
          style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px', background: '#ffcdd2' }}
        >
          Start Slow Update
        </button>
        <button
          onClick={() => setCount(c => c + 1)}
          style={{ padding: '10px 20px', fontSize: '16px', background: '#c8e6c9' }}
        >
          Interrupt with Sync Update
        </button>
      </div>

      <div style={{ padding: '15px', background: '#f5f5f5', borderRadius: '8px', fontSize: '14px' }}>
        <h3>Console Legend:</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong style={{ color: '#9c27b0' }}>[Update #N] SCHEDULED</strong> - New update queued</li>
          <li><strong style={{ color: '#2196f3' }}>[Update #N] RENDER_START</strong> - Render phase begins</li>
          <li><strong style={{ color: '#ff9800' }}>[Update #N] YIELDED</strong> - Paused to let browser breathe</li>
          <li><strong style={{ color: '#4caf50' }}>[Update #N] RESUMED</strong> - Continuing after yield</li>
          <li><strong style={{ color: '#9c27b0' }}>[Update #N] SUSPENDED</strong> - Waiting for async data</li>
          <li><strong style={{ color: '#00bcd4' }}>[Update #N] PINGED</strong> - Data arrived, ready to retry</li>
          <li><strong style={{ color: '#ff5722' }}>[Update #N] INTERRUPTED</strong> - Preempted by higher priority</li>
          <li><strong style={{ color: '#4caf50' }}>[Update #N] COMMITTED</strong> - Applied to DOM</li>
        </ul>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
