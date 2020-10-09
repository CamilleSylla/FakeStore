import React from 'react';
import './App.css';

import Product from './pages/product'
import Landing from './pages/landing';

import { BrowserRouter as Rooter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="banniere">
      </div>
      <Rooter>
        <Route path='/' exact component={Landing} />
        <Route path='/Shop' exact component={Product} />
      </Rooter>
    </div>
  );
}

export default App;
