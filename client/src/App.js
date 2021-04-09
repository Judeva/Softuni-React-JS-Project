import { useState, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { auth } from './firebase/firebase';
//import * as nominationsService from './services/nominationsService';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './components/about/About';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import Nomination from './components/nomination/Nomination';
import Create from './components/create/Create';
import Profile from './components/profile/Profile';
import Error404 from './components/404/Error404';

function App() {


  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  },[]);

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' exact render={props => (<Home {...props} />)} />
        <Route path='/login' component={Login} />
        <Route path='/about' component={About} />
        <Route path='/register' component={Register} />
        <Route path='/nomination' component={Nomination} />
        <Route path='/create' component={Create} />
        <Route path='/profile' render={props => (<Profile {...props} />)} />
        <Route path='/logout'
          render={props => {
            auth.signOut();
            return (<Redirect to='/' />)
          }} />
        <Route path='*' extact={true} render={() => <Error404 />} />
      </Switch>
      <Footer />
    </div>
  )
};


export default App;
