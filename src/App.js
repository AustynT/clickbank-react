import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Container from './components/Container';


class App extends Component 
{
  render() 
  {
    return (
      <BrowserRouter>
      <div className="grid-rows-3 gap-3 overflow-auto">
        <Navbar/>
        <Container />
      </div>
      </BrowserRouter>
    );
  }
}
export default App;