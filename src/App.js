import React from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from './Checkout'
import ProductForm from './ProductForm'
import Admin from './Admin'
import AdminHome from './AdminHome'
import Login from './Login'
import Signup from './Signup'

const App = (props) => {
  return (
    <Router>
      <div className="app">
          
          <Switch>
           <Route path='/admin'> 
            <Admin />
          </Route>
          <Route path='/login'> 
            <Login />
          </Route>
            <Route exact path='/'>
          <Header/> 
            <Home />
          </Route>
          <Route path='/home'>
            <AdminHome />
          </Route>
          <Route path='/checkout'>
            <Header/> 
            <Checkout />
          </Route>
          <Route path='/product/new'>
            <ProductForm />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
