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
      <div className="overflow-y-hidden h-screen grid grid-rows-8 grid-cols-12">
        <Navbar/>
        <Container />
        <div className="row-start-7 object-top">footer</div>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;