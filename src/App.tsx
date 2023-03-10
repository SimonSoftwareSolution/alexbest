import React from 'react';
import titelbild from './images/nusa.jpg';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App container">
        <div className="card my-3 noBorder card-background">
        <h6>ο½‘π   π  π²π½π ππππ πΎπ ππ½π π·πππ  π  π ο½‘</h6>
      </div>
      <div className="card">
        <img src={titelbild} alt=''/>
        <div className="card-body card-background">
          <h5 className="card-title"></h5>
          <p className="card-text">
            Alexandra digged her way deep in my heart β€οΈ
            Here i want to summarize her best points in three different categories
          </p>
        </div>
      </div>
      <div className="card my-3 card-background">
        <Link to="/character" style={{color : 'black', textDecoration : 'none'}} >Character</Link>
      </div>
      <div className="card my-3 card-background">
        <Link to="/actions" style={{color : 'black', textDecoration : 'none'}}>Actions</Link>
      </div>
      <div className="card my-3 card-background">
        <Link to="/body" style={{color : 'black', textDecoration : 'none'}}>Body</Link>
      </div>
    </div>
  );
}

export default App;
