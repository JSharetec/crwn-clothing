import React from 'react';
import {Route , Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shoppage.component';
import SignInSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import Header from './components/header/header.component'
import {auth, createUserProfileDocument } from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'
 
class App extends React.Component {

 


unsubscriptionFromAuth =  null;
componentDidMount() {
  this.unsubscriptionFromAuth = auth.onAuthStateChanged( async userAuth => {
    if(userAuth) {
      const userRef = await  createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        this.props.setCurrentUser({
          id:snapShot.id,
          ...snapShot.data()
        })    

      });
     
    } else {
      this.props.setCurrentUser({
        currentUser:null
      })
    }
  })
}

componentWillUnmount() {
this.unsubscriptionFromAuth();
}

 render() {
  return (
  //   <div >
  // <HomePage></HomePage>
  //   </div>
  <div>
  <Header />
  <Switch>
  <Route exact path='/' component = {HomePage}></Route>
  <Route exact path='/signin' component = {SignInSignOutPage}></Route>
  <Route  path='/shop' component = {ShopPage}></Route>
  </Switch>
 
  </div>
 
  );
}
}

const mapDispatchToProps = dispach => ({
  setCurrentUser: user => dispach(setCurrentUser(user))
}
)

export default connect(null,mapDispatchToProps)(App);
