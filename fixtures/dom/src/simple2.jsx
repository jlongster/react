import React from 'react';
import ReactDOM from 'react-dom/client';

const debugDOM = document.querySelector('#debug');

function log(msg) {
  const div = document.createElement('div');
  div.textContent = msg;
  debugDOM.appendChild(div);
}

// Goal: have a high pri update override a low pri one

function SlowList({ count, num }) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(<SlowItem key={i} index={i} num={num} />);
  }
  return <ul>{items}</ul>;
}

function SlowItem({ index, num }) {
  let now = performance.now();
  while (performance.now() - now < 2) {}
  return (
    <li>
      {index}: ({num})
    </li>
  );
}

let lastTime = null;

export default function App() {
  const [value, setValue] = React.useState('1');
  const [num, setNum] = React.useState(1);

  function onChange(e) {
    setValue(e.target.value);

    React.startTransition(() => {
      setNum(parseInt(e.target.value));
    });
  }

  return (
    <div>
      <input value={value} onChange={onChange} />
      <SlowList num={num} count={100} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
