// App.js

import React from 'react';
import './App.css'; // Import your CSS file
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NewPage from './NewPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="title">Stock Pilot</div>
          <div className="services" style={{ marginLeft: '200px' }}>
            <span>Services</span>
            <span>Students</span>
            <span>RoadMap</span>
          </div>
          <div className="icons">
            <a href="#"><img src="mdi_github.png" alt="GitHub" /></a>
            <a href="#"><img src="discord-icon.png" alt="Discord" /></a>
            <a href="#"><img src="reddit-icon.png" alt="Reddit" /></a>
            <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
          </div>
        </header>

        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/new-page">
              <NewPage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1 className='colorful-text'>
        Guiding Your <br />
        Investments <br />
        to New Heights
      </h1>
      <p>Your trusted navigator in the world of stock trading. With its advanced predictive analytics and real-time market
      </p>
      <p>monitoring, StockPilot empowers investors to make strategic decisions with confidence. Whether you're seeking short-</p>
      <p className="new">term gains or long-term growth, let StockPilot be your guide as you chart a course towards financial prosperity.</p>
      <div className="buttons">
        <Link to="/new-page"><button className='btn'>Get Started</button></Link>
        <button className="btn">Eco Systems</button>
      </div>
    </div>
  );
}

export default App;
