import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CarsComp from './components/CarView/CarView';
import CarModel from './data-models/CarModel';


function App() {
  //console.log(new CarModel('ABC','QW',2000,1989))
  const carData = [];
  carData.push(new CarModel('Toyota','Yaris',20000,2015));
  carData.push(new CarModel('BMV','Handi',10000,2010));
  carData.push(new CarModel('Citroen','Dam',50000,2018));
  return (
    <Container>
      <CarsComp cars={carData} />
     <h2>Hello react world</h2>
     <h1>hjhj</h1>
   </Container>
  );
}

export default App;
