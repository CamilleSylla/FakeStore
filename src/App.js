import React, { useState } from 'react';
import './App.css';

import Product from './pages/product';
import Landing from './pages/landing';
import Panier from './pages/panier';
import Item from './pages/Item';

import { BrowserRouter as Rooter, Route } from 'react-router-dom';



export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      select : "1",
      selected: []
    }
  }
  componentDidMount() {
    fetch('https://fakestoreapi.com/products/' + this.state.selected)
    .then(res =>  res.json())
    .then( item => this.setState({ selected : item}));
}
  callback(id) {
    this.setState({ select: id});
    console.log(this.state.select);
  }
  render () {
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
          <Route path='/Shop' render={ (props) => <Product {...props} itemId={this.callback.bind(this)} />} />
          <Route path='/Panier' exact component={Panier} />
          <Route path='/Item' render={ (props) => <Item {...props} id={this.state.select} />} item={this.state.selected}/>
        </Rooter>
      </div>
    );
  }
  
}

