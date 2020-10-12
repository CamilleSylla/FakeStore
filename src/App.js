import React from 'react';
import './App.css';

import Product from './pages/product';
import Landing from './pages/landing';
import Panier from './pages/panier';

import { BrowserRouter as Rooter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="banniere">
        <div className="banLayer">
          <div className="banGrid">
            <div className="banTitle">
              <div>
                <h1>IconicStore</h1>
                <h2>Juste un site web e-commerce de demonstration</h2>
              </div>
            </div>
            <div className="banLogo">
            </div>
          </div>
        </div>
      </div>
      <Rooter>
        <Route path='/' exact component={Landing} />
        <Route path='/Shop' exact component={Product} />
        <Route path='/Panier' exact component={Panier} />
      </Rooter>
    </div>
  );
}

export default App;
