import React from 'react';
import './App.css';

import Product from './pages/product'
import IDV from './assets/video/IDV.mp4'




function App() {
  return (
    <div className="App">
      
      <div className="banniere">

      </div>
      <div className="landing">
        <div className="womenClothes">
          <h1> Girly Power</h1>
          <h2> Soyez dans la tendance</h2>
          <p> Shopping</p>
        </div>
        <div className="womenClothesImg">
          
        </div>
        <div className="menClothes">
        <h1> Classic Urbain</h1>
          <h2>la nouvelle collection est arrivée !</h2>
          <p> Shopping</p>
        </div>
        <div className="menClothesImg">
          
        </div>
        <div className="bijoux">
        <h1> Bling Bling</h1>
          <h2>Remarquable en indiscretion</h2>
          <p> Shopping</p>
        </div>
        <div className="bijouxImg">
          
          </div>
          <div className="it">
          <h1>L'ère Technologique</h1>
          <h2>le meilleur du High-Tech</h2>
          <p> Shopping</p>
        </div>
        <div className="itImg">
          
        </div>
      </div>
      <div className="product">
        <Product />
      </div>
    </div>
  );
}

export default App;
