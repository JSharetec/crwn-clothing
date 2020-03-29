import React from 'react';
import {Route , Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shoppage.component';
import SignInSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import Header from './components/header/header.component'


function App() {
  return (
  //   <div >
  // <HomePage></HomePage>
  //   </div>
  <div>
  <Header/>
  <Switch>
  <Route exact path='/' component = {HomePage}></Route>
  <Route exact path='/signin' component = {SignInSignOutPage}></Route>
  <Route  path='/shop' component = {ShopPage}></Route>
  </Switch>
 
  </div>
 
  );
}

export default App;
