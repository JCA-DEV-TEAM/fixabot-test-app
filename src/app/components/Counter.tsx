'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // BUG: should add 1 each click, but accidentally adds 2.
    setCount(c => c + 2);
  };

  const reset = () => setCount(0);

  return (
    <div className="card">
      <h2>2. Counter</h2>
      <p>Each click should increment the counter by 1.</p>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={increment}>+1</button>
        <button className="secondary" onClick={reset}>Reset</button>
        <span className="value" style={{ marginLeft: 12 }}>Count: {count}</span>
      </div>
    </div>
  );
}
