// App.js
import React from 'react';
// import Timer from './Timer';
import TestInterface from './TestInterface';
// import { TestInterface } from './TestInterface';
// import { MathJaxContext } from 'better-react-mathjax';

function App() {
  return (
      <div className="App">
        <h2>Online Testing Platform</h2>
        <div className='main-area'>
          {/* <div className='timer'>
            <Timer />
          </div> */}
          <div className='inter' >
            <TestInterface />
          </div>
        </div>
      </div>
  );
}

export default App;
