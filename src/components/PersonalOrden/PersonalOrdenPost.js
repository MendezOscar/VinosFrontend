import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postPersonalOrden } from '../../actions/PersonalOrden'
import EmpleadoCover from '../Empleado/EmpleadoCover'
import NavBar from '../NavBar/Navbar'
import { Redirect } from 'react-router';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postPersonalOrden
    }, dispatch)
}

class PersonalOrdenPost extends Component {

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

    submitFormHandler = (e) => {
        e.preventDefault();
        const idpersonal = this.refs.idpersonal.value;
        const idempleado = this.refs.idempleado.value;
        const idorden = this.refs.idorden.value;
        const personalOrden = {
            idpersonal,
            idempleado,
            idorden,
        }
        this.props.postPersonalOrden(personalOrden);
    }

    render() {
        if (this.state.isRedirected) {
            return (
                <Redirect to={"/detail/" + this.refs.idorden.value} />
            );
        }
        return (
            <div>
                <NavBar />
                <EmpleadoCover />
                <br />
                <div className="container">
                    <form>

                        <div className="row">
                            <div className="col">
                                <label className="left">Codigo de personal orden</label>
                                <input type="text" className="form-control" placeholder="Codigo de personal orden" ref="idpersonal" />
                            </div>
                            <div className="col">
                                <label className="left">Codigo de la empleado</label>
                                <input type="text" className="form-control" placeholder="Codigo del empleado" ref="idempleado" />
                            </div>
                            <div className="col">
                                <label className="left">Codigo de la orden</label>
                                <input type="text" className="form-control" placeholder="Codigo de la orden" ref="idorden" />
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
)(PersonalOrdenPost);