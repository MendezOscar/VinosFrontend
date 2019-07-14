import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postPersonalVisita } from '../../actions/PersonalVisita'
import EmpleadoCover from '../Empleado/EmpleadoCover'
import NavBar from '../NavBar/Navbar'
import { Redirect } from 'react-router';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postPersonalVisita
    }, dispatch)
}

class PersonalVisitaPost extends Component {

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
        const idpersonalvisita = this.refs.idpersonalvisita.value;
        const idempleado = this.refs.idempleado.value;
        const idvisita = this.refs.idvisita.value;
        const personalvisita = {
            idpersonalvisita,
            idempleado,
            idvisita,
        }
        this.props.postPersonalVisita(personalvisita);
    }

    render() {
        if (this.state.isRedirected) {
            return (
                <Redirect to={"/detail/" + this.refs.idvisita.value} />
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
                                <label className="left">Codigo de personal visita</label>
                                <input type="text" className="form-control" placeholder="Codigo de actividad visita" ref="idpersonalvisita" />
                            </div>
                            <div className="col">
                                <label className="left">Codigo de la empleado</label>
                                <input type="text" className="form-control" placeholder="Codigo del empleado" ref="idempleado" />
                            </div>
                            <div className="col">
                                <label className="left">Codigo de la visita</label>
                                <input type="text" className="form-control" placeholder="Codigo de la visita" ref="idvisita" />
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
)(PersonalVisitaPost);