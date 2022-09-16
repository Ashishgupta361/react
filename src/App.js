import './App.css';
import { useState } from 'react';



function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('submitted');
  }

  const add = () => {
    let c = parseInt(inputs.username) + parseInt(inputs.age);
    alert('sum is ' + c);

  };
  const st = () => {
    let c = parseInt(inputs.username) - parseInt(inputs.age);
    alert('Difference is ' + c);

  };
  const st1 = () => {
    let c = parseInt(inputs.username) * parseInt(inputs.age);
    alert('Multiplication is ' + c);

  };
  const st2 = () => {
    let c = parseInt(inputs.username) / parseInt(inputs.age);
    alert('Division is ' + c);

  };

  return (
    <div >
      <h1 class="con">Calculator App</h1>
      <br></br>
      <span>


        <form onSubmit={handleSubmit}>
          <label>Enter first number:
            <input
              type="number"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>Enter second number:
            <input
              type="number"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <input type="submit" />
        </form>


        <h3>Addition</h3>
        <button onClick={add}>sum</button>

        <h3>Subtraction</h3>
        <button onClick={st}>Minus</button>

        <h3>Multiplication</h3>
        <button onClick={st1}>Multiply</button>

        <h3>Divide</h3>
        <button onClick={st2}>Division</button>
      </span>
    </div>
  );
}

export default App;
