import React, { Component } from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import './index.css'

class ModalVisita extends Component {
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
          var e = document.querySelectorAll('.datepicker');
          M.Datepicker.init(e, options);
    }
    
    render() {
        return (
            <div>
              <div className="row">
                <div className = "col s6 offset-s12">
              <a className="btn modal-trigger btn-floating btn-large red" data-target="modal1"  href="/modalvisita"><i className="material-icons">add</i></a>
                 </div>
                </div>
                
                <div ref={Modal => { this.Modal = Modal; }} id="modal1" className="modal modal-fixed-footer">
                <div className="modal-content">
                  <div className="row">
                  <div className="input-field col s9">
                    <input id="first_name" type="text" className="validate"/>
                    <label for="first_name">Titulo</label>
                   </div>
                  </div>

                  <div className="row">
                  <div class="input-field col s9">
                    <input id="first_name" type="text" className="validate"/>
                    <label for="first_name">Descripcion</label>
                   </div>
                  </div>

                  <div className="input-field col s19">
                   <select>
                    <option value="" selected>Numero de visita</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <label>Numero de visita</label>
                </div>

                <div className="input-field col s19">
                <label>Fecha</label>
                  <input type="text" className="datepicker"/>
                </div>

                </div>
                <div className="modal-footer">
                    <a className="modal-close btn-flat" >Cancelar </a>
                    <a className="modal-close btn-flat" >Guardar</a>
                </div>
            </div>
            </div>
        );
    }
}

export default ModalVisita;