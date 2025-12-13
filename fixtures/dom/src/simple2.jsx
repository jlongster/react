import React from 'react';
import ReactDOM from 'react-dom/client';

const ARTIFICIAL_DELAY = 1;
const LIST_LENGTH = 500;

const SlowList = React.memo(({ count, num }) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(<SlowItem key={i} index={i} num={num} />);
  }
  return <ul>{items}</ul>;
});

function SlowItem({ index, num }) {
  let startTime = performance.now();
  while (performance.now() - startTime < ARTIFICIAL_DELAY) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
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
      <input value={value} onChange={onChange} />
      <SlowList num={num} count={LIST_LENGTH} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
