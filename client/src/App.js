import { Component } from 'react';

import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
//import * as nominationsService from './services/nominationsService';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './components/about/About';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import Nomination from './components/nomination/Nomination';
import './App.css';
import Create from './components/create/Create';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
       nominations: []
    }
  }

  // componentDidMount() {
  //   nominationsService.getAll()
  //     .then(posts => {
  //       this.setState({ posts })
  //     });
  // }

  render() {
    return (

      
      <div className="App">
        <Header />
        <Route path='/' exact component={Home} /> 
        <Route path='/login' component={Login} />
        <Route path='/about' component={About} />
        <Route path='/register' component={Register} />
        <Route path='/nomination' component={Nomination} />
        <Route path='/create' component={Create} />
        {/* <Route render={() => <h1 >Error Page</h1>} /> */}
        <Footer />
      </div>
    )
  };
}

export default App;
