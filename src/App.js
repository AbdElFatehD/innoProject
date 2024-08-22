import logo from './logo.svg';
import './App.css';
import Header from './Components/header.js';
import Introheader from './Components/introHeader.js';
import OurNumbers from './Components/ourNumbers.js';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from 'react';
import Partecepate from './Components/partecepate';
import ParticiGrps from './Components/particiGrps';
import Prev from './Components/prev';
import AreYouReady from './Components/areYouReady';
import ContactCard from './Components/ContactCard';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Introheader></Introheader>
       <OurNumbers></OurNumbers>
       <Partecepate></Partecepate>
       <ParticiGrps></ParticiGrps>
       <Prev></Prev>
       <AreYouReady></AreYouReady>
       <ContactCard></ContactCard>
    </div>
  );
}

export default App;
