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
      <div className="h-screen grid grid-rows-layout grid-cols-6">
        <Navbar/>
        <Container />
        <div className="h-12 row-start-6">footer</div>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;