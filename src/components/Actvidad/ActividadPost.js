import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postActividad } from '../../actions/Actividad'
import ActividadCover from '../Actvidad/ActividadCover'
import Navbar from '../NavBar/Navbar'
import { Redirect } from 'react-router';


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postActividad
  }, dispatch)
}

class ActividadPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRedirected: false
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.setState({ isRedirected: true });
  }

  submitFormHandler = event => {
    event.preventDefault();
    const codigo = this.refs.codigo.value;
    const descripcion = this.refs.descripcion.value;
    const numero = this.refs.numero.value;
    const actividad = {
      codigo,
      descripcion,
      numero,
    }
    this.props.postActividad(actividad);
  }

  render() {
    if (this.state.isRedirected) {
      return (
        <Redirect to={"/actividades"} />
      );
    }
    return (
      <div>
        <Navbar />
        <ActividadCover />
        <br />
        <div className="container">
          <form>
            <div className="form-group">
              <label className="left">Codigo</label>
              <input type="text" className="form-control" ref="codigo" placeholder="Codigo" />
            </div>


            <div className="form-group">
              <label className="left">Descripcion</label>
              <textarea className="form-control" ref="descripcion" rows="3"></textarea>
            </div>

            <div className="form-group">
              <label className="left">Numero de visita</label>
              <select className="form-control" ref="numero">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div>
              <button onClick={this.onClick} className="btn btn-secondary">Volver</button>
              <button onClick={this.submitFormHandler} type="submit" className="btn btn-primary">Guardar</button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ActividadPost);