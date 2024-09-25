import React, { useState, useEffect, useRef } from 'react';

function PreviousState() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0); // Store previous count

  useEffect(() => {
    prevCountRef.current = count; // Update ref on every render
    console.log("count = ",count)
    console.log("Old count = ",prevCountRef.current)
  });

  return (
    <div>
      <h1>Current count: {count}</h1>
      <h2>Previous count: {prevCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousState;