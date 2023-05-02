import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleButtonClick = (event) => {
    const value = event.target.value;
    switch (value) {
      case '=':
        setResult(eval(input));
        setInput('');
        break;
      case 'C':
        setResult(0);
        setInput('');
        break;
      default:
        setInput(input + value);
        break;
    }
  };

  return (
    <div>
      <input type="text" value={input} />
      <br />
      <button onClick={handleButtonClick} value="1">1</button>
      <button onClick={handleButtonClick} value="2">2</button>
      <button onClick={handleButtonClick} value="3">3</button>
      <button onClick={handleButtonClick} value="+">+</button>
      <br />
      <button onClick={handleButtonClick} value="4">4</button>
      <button onClick={handleButtonClick} value="5">5</button>
      <button onClick={handleButtonClick} value="6">6</button>
      <button onClick={handleButtonClick} value="-">-</button>
      <br />
      <button onClick={handleButtonClick} value="7">7</button>
      <button onClick={handleButtonClick} value="8">8</button>
      <button onClick={handleButtonClick} value="9">9</button>
      <button onClick={handleButtonClick} value="*">*</button>
      <br />
      <button onClick={handleButtonClick} value="C">C</button>
      <button onClick={handleButtonClick} value="0">0</button>
      <button onClick={handleButtonClick} value="=">=</button>
      <button onClick={handleButtonClick} value="/">/</button>
      <br />
      <input type="text" value={result} />
    </div>
  );
}

export default Calculator;
