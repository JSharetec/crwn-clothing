import React from 'react';
import {Route , Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const HatPage = () => (
  <div>
  <h1> Hats Page</h1>
  </div>
)

function App() {
  return (
  //   <div >
  // <HomePage></HomePage>
  //   </div>
  <div>
  <Switch>
  <Route exact path='/' component = {HomePage}></Route>
  <Route  path='/shop/hats' component = {HatPage}></Route>
  </Switch>
 
  </div>
 
  );
}

export default App;
