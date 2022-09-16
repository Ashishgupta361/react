import './App.css';
import { useState } from 'react';



function App() {
  const [name, setName] = useState("");

  let a = 2;
  let b = 3;
  const add = () => {

    alert('sum is ');

  };
  const st = () => {
    alert("Subtaction");
  }

  return (
    <div>
      <h1 class="con">Calculator App</h1>


      <form>
        <label>Enter first number:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br></br>
        <label>Enter first number:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>

      <h3>Addition</h3>
      <button onClick={add}>sum</button>

      <h3>Subtraction</h3>
      <button onClick={st}>Minus</button>

      <h3>Multiplication</h3>
      <button>Multiply</button>

      <h3>Divide</h3>
      <button>Division</button>
    </div>
  );
}

export default App;
