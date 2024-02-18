import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('dark');
  
  const incrementCount = () =>{
    setCount((prevState) => prevState + 1);
    // Para pegar o valor anterior e modifica-lo
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App;
