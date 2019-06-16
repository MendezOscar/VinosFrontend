import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import Home from './views/Home';
import VisitaDetail from './views/VisitaDetail'
import ActividadCrud from './views/ActividadCrud'
import PropTypes from 'prop-types'
import './App.css';

class App extends Component {

  render(){
    return (
      <Router history = { this.props.history }>
        <div className="App">
          <Route exact path="/Home" component={Home}/>
          <Route path="/detail/:visitaId" component={VisitaDetail}/>
          <Route path="/Actividades" component={ ActividadCrud }/>
        </div>
      </Router>
   );
  }
}

App.propTypes = {
  history: PropTypes.any.isRequired
}

export default App;