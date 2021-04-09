import { Component } from 'react';
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

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: 'NOT',
      user: {},
      nominations: []
    }
  }

  // componentDidMount() {
  //  this.setState(this.state.loggedIn)
  // }

  
  render() {
    return (
      <div className="App">
        <Header loggedIn={this.state.loggedIn} />
        <Switch>
        <Route path='/' exact render={props => (<Home {...props} loggedIn={this.state.loggedIn}/>)} />
        <Route path='/login' component={Login} />
        <Route path='/about' component={About} />
        <Route path='/register' component={Register} />
        <Route path='/nomination' component={Nomination} />
        <Route path='/create' component={Create} />
        <Route path='/profile' render={props => (<Profile {...props} loggedIn={this.state.loggedIn} />)} />
       
        <Route path='*' extact={true} render= {()=><Error404/>}/>
        </Switch>
        <Footer />
      </div>
    )
  };
}

export default App;
