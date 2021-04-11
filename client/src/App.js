import { useState, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { auth } from './firebase/firebase';
import axios from 'axios';
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
import AuthContext from './contexts/AuthContext';
import CollectionContext from './contexts/CollectionContext';


const App = () => {

  const [loggedUser, setLoggedUser] = useState(null);


  useEffect(() => {
    auth.onAuthStateChanged(setLoggedUser)
  }, []);


  const authInfo = {
    isAuthenticated: Boolean(loggedUser),
    user: loggedUser.email
  };


  return (
    <div className="App" >
        <AuthContext.Provider value={authInfo}>
          <Header />
          <div className='bg-purple'>
            <div className="stars">
              <div className="central-body">
                {/* Social distance */}
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/login' component={Login} />
                  <Route path='/about' component={About} />
                  <Route path='/register' component={Register} />
                  <Route path='/nomination' component={Nomination} />
                  <Route path='/create' component={Create} />
                  <Route path='/profile' component={Profile} />
                  <Route path='/logout'
                    render={props => {
                      auth.signOut();
                      return (<Redirect to='/' />)
                    }} />
                  <Route path='*' extact={true} render={() => <Error404 />} />
                </Switch>
                {/* Social distance */}
                <div className="objects">
                  <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="60px" alt='rocket' />
                  <div className="earth-moon">
                    <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt='earth' />
                    <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt='moon' />
                  </div>
                  <div className="box_astronaut">
                    <img className="object_astronaut"
                      src="https://firebasestorage.googleapis.com/v0/b/cat-chasing-tail.appspot.com/o/cat-space-01.svg?alt=media&token=b08f7866-6c14-4c1c-83f2-6043746ea5ff"
                      width="160px"
                      alt='space-cat' />
                  </div>
                </div>
                <div className="glowing_stars">
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
       </AuthContext.Provider>  
    </div>

  )
};

export default App;
