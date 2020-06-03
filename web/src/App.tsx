import React from 'react';
import { useState } from 'react';
import './App.css';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title={ `Hello Tairone ${counter}` } />
      <h1>Conteudo da aplicação</h1>
      <p>{ counter }</p>
      <p>{ counter * 2 }</p>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
