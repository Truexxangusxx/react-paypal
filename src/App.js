import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pagina from './components/pagina.js'
import Galeria from './components/galeria.js'
var ReactRouter = require('react-router-dom');
var  Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends Component {


  render() {
    return (
      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br/>
      </div>
      */
      <Router>
        <div className='container'>
          <Route path="/" exact render={(props) => (<Galeria frc={this.props.frc}/>)} />
          <Route path="/pagina" component={Pagina}/>
          <Route path="/perfil/:id" component={Pagina}/>
        </div>
      </Router>
    );
  }
}

export default App;
