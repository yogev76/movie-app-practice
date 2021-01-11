import React from 'react';
import './App.css';
import CarsComp from './components/CarView/CarView';
import CarModel from './data-models/CarModel';


function App() {
  console.log(new CarModel('ABC','QW',2000,1989))
  return (
    <div>
      <CarsComp />
     <h2>Hello react world</h2>
    </div>
  );
}

export default App;
