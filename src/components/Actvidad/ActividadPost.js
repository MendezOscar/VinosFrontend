import React, { Component } from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postActividad } from '../../actions/Actividad'
import { Redirect } from 'react-router';

function mapStateToPropos(state) {
  return {
    visitaDetail: state.getVisitaById
  }
}

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


  handleSubmit = (e) => {
    e.preventDefault();
    const codigo = this.getId.value;
    const descripcion = this.getDescripcion.value;
    const numero = this.getNumerovisita.value;
    const actividad = {
      codigo,
      descripcion,
      numero,
    }
    this.props.postActividad(actividad);
  }

  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, options);
  }

  onClick(e) {
    this.setState({ isRedirected: true });
  }

  render() {
    if (this.state.isRedirected) {
      return (
        <Redirect to={"/Actividades"} />
      );
    }
    return (
      <div>
        <div className="row">
          <div className="col s2 offset-s12">
            <a className="btn modal-trigger btn-floating btn-large red" data-target="modal1" href="/modalvisita"><i className="material-icons">add</i></a>
          </div>
        </div>

        <div ref={Modal => { this.Modal = Modal; }} id="modal1" className="modal modal-fixed-footer">
          <div className="modal-content">
            <form onSubmit={this.handleSubmit}>
              <h5>Crear nueva actividad</h5>

              <div className="row">
                <div div className="input-field col s4">
                  <input required type="text" ref={(input) => this.getId = input}
                    placeholder="Codigo" className="col " />
                </div>
                <div className="input-field col s6">
                  <select ref={(input) => this.getNumerovisita = input} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <label>Numero de visita</label>
                </div>

              </div>

              <div className="row">
                <div className="input-field col s12">
                  <textarea id="image_description" type="text" class="materialize-textarea validate" ref={(input) => this.getDescripcion = input} ></textarea>
                  <label for="image_description">Description</label>
                </div>
              </div>

              <div className="row">

              </div>
              <div className="row">
                <div>
                  <button className="btn waves-effect waves-light" href="/Actividades">Guardar</button>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <a className="modal-close btn-flat" href="/Actividades">Cancelar</a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToPropos,
  mapDispatchToProps
)(ActividadPost);