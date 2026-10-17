import React, { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch(`${API_URL}/api/groceries`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setStatus('');
      })
      .catch(() => setStatus('Could not reach backend'));
  }, []);

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h1>Grocery List</h1>
      {status && <p>{status}</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} — ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;