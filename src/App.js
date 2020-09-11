import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Wrapper from './components/Wrapper'
import './App.css';
import About from './pages/About'
import Contact from './pages/ContactForm'
import Portfolio from './pages/Portfolio'
import SlashaTech from './pages/SlashaTech'
import HeroCraftTech from './pages/HeroCraftTech'
import RoadTripprTech from './pages/RoadTripprTech';
import NoteTakerTech from './pages/NoteTakerTech';



function App() {
  return (
    <Router>
    <div>
      <Wrapper>
        <Route exact path ="/" component={About} />
        <Route exact path = "/portfolio1" component={Portfolio} />
        <Route exact path ="/slashatech" component={SlashaTech} />
        <Route exact path ="/herotech" component={HeroCraftTech} />
        <Route exact path ="/roadtech" component={RoadTripprTech} />
        <Route exact path ="/notetech" component={NoteTakerTech} />

      </Wrapper>
    </div>
    </Router>
  );
}

export default App;
