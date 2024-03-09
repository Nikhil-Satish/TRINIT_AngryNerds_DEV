import React from 'react';
import TestInterface from './TestInterface';

function App() {
  return (
      <div>
        <h1 style={{textAlign: 'center', margin: 10}}>Online Testing Platform</h1>
        <div className='main-area'>
          <div className='inter' >
            <TestInterface />
          </div>
        </div>
      </div>
  );
}

export default App;
