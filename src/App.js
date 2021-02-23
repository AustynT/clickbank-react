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
      <div className="h-screen grid grid-rows-5 overflow-auto">
        <Navbar/>
        <Container />
        <div>footer</div>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;