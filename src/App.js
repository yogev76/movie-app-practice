import React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CarsComp from './components/CarView/CarView';
import CarModel from './data-models/CarModel';
import ActorComp from './components/CarView/CarView';
import ActorModel from './data-models/CarModel';


function App() {
  //console.log(new CarModel('ABC','QW',2000,1989))
  const carData = [];
  carData.push(new ActorModel('Javier ','Bardem','https://m.media-amazon.com/images/M/MV5BMTY1NTc4NTYzMF5BMl5BanBnXkFtZTcwNDIwOTY1NA@@._V1_UX214_CR0,0,214,317_AL_.jpg','https://www.imdb.com/name/nm0000849/?ref_=nm_mv_close'));
  carData.push(new ActorModel('Johnny','Depp','https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY317_CR4,0,214,317_AL_.jpg','https://www.imdb.com/name/nm0000136/?ref_=nv_sr_srsg_2'));
  carData.push(new ActorModel('Scarlett ','Johansson','https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg','https://www.imdb.com/name/nm0424060/?ref_=nv_sr_srsg_0'));
  carData.push(new ActorModel('Penélope  ','Cruz','https://m.media-amazon.com/images/M/MV5BMTM0Mzc1MTc2OF5BMl5BanBnXkFtZTcwMzE4MzQxMw@@._V1_UX214_CR0,0,214,317_AL_.jpg','https://www.imdb.com/name/nm0004851/?ref_=nv_sr_srsg_0'));
  carData.push(new ActorModel('Jack ','Black ','https://m.media-amazon.com/images/M/MV5BYTFiMWNlNmItMDRiYy00NzA4LWE5YjItZmViNWQ2NzhhOWZlXkEyXkFqcGdeQXVyMTA2Mjc5ODMy._V1_UY317_CR16,0,214,317_AL_.jpg','https://www.imdb.com/name/nm0085312/?ref_=nv_sr_srsg_0'));
  carData.push(new ActorModel('Julia ','Roberts ','https://m.media-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg','https://www.imdb.com/name/nm0000210/?ref_=nv_sr_srsg_0'));

  return (
    <Container>
      
      <ActorComp cars={carData} />

   
   </Container>
  );
}

export default App;
