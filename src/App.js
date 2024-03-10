import React from 'react';
import TestInterface from './TestInterface';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Uploader from './Uploader';

function App() {
  return (
      // <div>
      //   <h1 style={{textAlign: 'center', margin: 10}}>Online Testing Platform</h1>
      //   <div className='main-area'>
      //     <div className='inter' >
      //       <TestInterface />
      //     </div>
      //   </div>
      // </div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Uploader />
            <Link to="/test">Start the test</Link>
          </div>
        }>
        </Route>
        <Route 
        path='/test' element={
          <div>
            <h1 style={{textAlign: 'center', margin: 10}}>JEE Mock Test</h1>
            <div className='main-area'>
              <div className='inter' >
                <TestInterface />
              </div>
            </div>
          </div>
        }
        ></Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
