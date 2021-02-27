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
      <div className="h-screen grid grid-rows-6 grid-cols-5 ">
        <Navbar/>
        <Container />
        <div className="row-start-7 h-16 ">footer</div>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;