import React, {useEffect} from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders'
import{auth} from './firebase';
import {useStateValue} from './StateProvider'
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js'
import{Elements} from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51HhrtvDhnHGYb3OJIreSEmSI3H7DtmhFAdbVD0D8O0YsvEWkpWlKRGiRNqoAjJQwPV8hzvXavBDyjgAb9GosNmGp00oOKsav40')

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run oncce when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS', authUser);

      if(authUser){
        //The user logged in / the user was logged
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
