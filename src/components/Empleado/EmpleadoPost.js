import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postEmpleado } from '../../actions/Empleado'
import ActividadCocer from '../Actvidad/ActividadCover'
import NavBar from '../NavBar/Navbar'
import { Redirect } from 'react-router';
import Calendar from 'ciqu-react-calendar'

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postEmpleado
    }, dispatch)
}

class EmpleadoPost extends Component {

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
        const idempleado = this.refs.codigo.value;
        const nombre = this.refs.nombre.value;
        const apellido = this.refs.apellido.value;
        const edad = this.refs.edad.value;
        const fechanacimiento = this.refs.fechanacimiento.value;
        const cargo = this.refs.cargo.value;
        const Empleado = {
            idempleado,
            nombre,
            apellido,
            edad,
            fechanacimiento,
            cargo
        }
        this.props.postEmpleado(Empleado);
    }



    render() {
        if (this.state.isRedirected) {
            return (
                <Redirect to={"/empleado"} />
            );
        }
        return (
            <div>
                <NavBar />
                <ActividadCocer />
                <br />
                <div className="container">
                    <form>

                        <div className="form-group">
                            <label className="left">Codigo</label>
                            <input type="text" className="form-control" ref="codigo" placeholder="Codigo" />
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="left">Nombre</label>
                                <input type="text" className="form-control" placeholder="Nombre" ref="nombre" />
                            </div>
                            <div className="col">
                                <label className="left">Apellido</label>
                                <input type="text" className="form-control" placeholder="Apellido" ref="apellido" />
                            </div>
                        </div>

                        <br />

                        <div className="row">
                            <div className="col">
                                <label className="left">Edad</label>
                                <input type="text" className="form-control" placeholder="Edad" ref="edad" />
                            </div>
                            <div className="col">
                                <label className="left">Fecha de nacimiento</label>
                                <Calendar
                                    type="text"
                                    placeholder="Fecha de nacimiento"
                                    ref="fechanacimiento"
                                    format={'YYYY-MM-DD'}
                                />
                            </div>
                            <div className="col">
                                <label className="left">Cargo</label>
                                <input type="text" className="form-control" placeholder="Cargo" ref="cargo" />
                            </div>
                        </div>
                        <br />

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
)(EmpleadoPost);