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
      <div className="overflow-y-hidden h-screen grid grid-rows-5">
        <Navbar/>
        <Container />
        <div className="object-bottom">footer</div>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;