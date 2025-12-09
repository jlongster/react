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
  console.log('SlowItem rendering');
  /*for (let i = 0; i < 100000; i++) {
    // console.log(Math.random());
    window.x = Math.random();
  }*/
  return (
    <li>
      {index}: ({num})
    </li>
  );
}

let lastTime = null;

export default function App() {
  const [value, setValue] = React.useState('0');
  const [num, setNum] = React.useState(0);

  React.useEffect(() => {
    log('updated', value, num);

    const now = Date.now();
    if (lastTime) {
      log('time since last', now - lastTime);
    }
    lastTime = now;
  }, [value, num]);

  function onChange(e) {
    //React.startTransition(() => {
    setValue(e.target.value);
    //React.startTransition(() => {
    //  setNum(parseInt(e.target.value));
    //});
  }

  return (
    <div>
      <div>{20000}</div>
      <input value={value} onChange={onChange} />
      <SlowList num="333" count={100} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
