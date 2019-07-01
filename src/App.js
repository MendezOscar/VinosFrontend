import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import Home from './views/Home';
import VisitaDetail from './views/VisitaDetail'
import ActividadCrud from './views/ActividadCrud'
import EmpleadoCrud from './views/EmpleadoCrud'
import FincaCrud from './views/FincaCrud'
import InventarioCrud from './views/InventarioCrud'
import MateriaPrimaCrud from './views/MateriaPrima'
import Producto from './views/Producto'
import Proveedor from './views/Proveedor'
import Inventario from './views/InventarioCrud'
import Ordendeproduccion from './views/Ordendeproduccion'
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
          <Route path="/Empleado" component={ EmpleadoCrud }/>
          <Route path="/Finca" component={ FincaCrud }/>
          <Route path="/Materia-prima" component={ MateriaPrimaCrud }/>
          <Route path="/Inventario" component={ InventarioCrud }/>
          <Route path="/Producto" component={ Producto }/>
          <Route path="/Proveedor" component={ Proveedor }/>
          <Route path="/Kardex" component={ Inventario }/>
          <Route path="/Ordendeproduccion" component={ Ordendeproduccion }/>
        </div>
      </Router>
   );
  }
}

App.propTypes = {
  history: PropTypes.any.isRequired
}

export default App;