import './App.css';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import About from './components/about/About'
import Login from './components/login/Login'

function App() {
  return (
    <div className="App">

      <Header />
      <Route path='/login' component={Login} />
      <Route path='/about' component={About} />  
      <Footer />
    </div>
  );
}

export default App;
