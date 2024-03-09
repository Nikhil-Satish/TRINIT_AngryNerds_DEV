// App.js
import React from 'react';
// import Timer from './Timer';
import TestInterface from './TestInterface';
// import { TestInterface } from './TestInterface';
import './design/App.css'
import Uploader from './Uploader';

function App() {
  return (
      // <div className="App">
      //   <h2>Online Testing Platform</h2>
      //   <div className='main-area'>
      //     {/* <div className='timer'>
      //       <Timer />
      //     </div> */}
      //     <div className='inter' >
      //       <TestInterface />
      //     </div>
      //   </div>
      // </div>
      <div>
        <Uploader />
      </div>
  );
}

export default App;
