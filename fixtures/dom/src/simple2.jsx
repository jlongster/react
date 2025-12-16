import React from 'react';
import ReactDOM from 'react-dom/client';
import { renderToReadableStream } from 'react-dom/server';

const ARTIFICIAL_DELAY = 0;
const LIST_LENGTH = 3;

let throwPromise = true;

const SlowList = React.memo(({ count, num }) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(<SlowItem key={i} index={i} num={num} />);
  }
  return <ul>{items}</ul>;
});

function SlowItem({ index, num }) {
  console.log(index);

  let startTime = performance.now();
  while (performance.now() - startTime < ARTIFICIAL_DELAY) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  // if (num === 1 && index === 10 && throwPromise) {
  //   throwPromise = false;
  //   throw new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve(true);
  //     }, 3000);
  //   });
  // }

  return (
    <li>
      {index}: ({num})
    </li>
  );
}

export default function App() {
  const [value, setValue] = React.useState('1');
  const num = parseInt(React.useDeferredValue(value));

  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      Hello
      <div>
        <input value={value} onChange={onChange} />
        <SlowList num={num} count={LIST_LENGTH} />
      </div>
    </div>
  );
}

// Stream the server-rendered HTML into the page
async function run() {
  const stream = await renderToReadableStream(<App />);
  const reader = stream.getReader();
  const decoder = new TextDecoder();

  const root = document.getElementById('root');
  let html = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    console.log('[Stream] Received chunk:', chunk.length, 'bytes');
    html += chunk;
    root.innerHTML = html;
  }

  console.log('[Stream] Complete, total HTML:', html.length, 'bytes');

  // After streaming completes, hydrate to make it interactive
  // ReactDOM.hydrateRoot(root, <App />);
}

run();
