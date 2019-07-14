import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from '../NavBar/Navbar'
import { Redirect } from 'react-router';
import { postMateriaprima } from '../../actions/Materiaprima'
import MateriaPrimaCover from '../MateriaPrima/MateriaPrimaCover'

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postMateriaprima
    }, dispatch)
}


class MateriaprimaPost extends Component {

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
        const idmateriaprima = this.refs.idmateriaprima.value;
        const nombre = this.refs.nombre.value;
        const descripcion = this.refs.descripcion.value;
        const idproveedor = this.refs.proveedor.value;
        const materiaprima = {
            idmateriaprima,
            nombre,
            descripcion,
            idproveedor
        }
        this.props.postMateriaprima(materiaprima);
    }

    render() {
        if (this.state.isRedirected) {
            return (
                <Redirect to={"/Materiaprima"} />
            );
        }
        return (
            <div>
                <NavBar />
                <MateriaPrimaCover />
                <br />
                <div className="container">
                    <form>

                        <div className="row">
                            <div className="col">
                                <label className="left">Codigo</label>
                                <input type="text" className="form-control" placeholder="Codigo" ref="idmateriaprima" />
                            </div>
                            <div className="col">
                                <label className="left">Nombre</label>
                                <input type="text" className="form-control" placeholder="Nombre" ref="nombre" />
                            </div>
                        </div>

                        <br />

                        <div className="row">
                            <div className="col">
                                <label className="left">Descripcion</label>
                                <input type="text" className="form-control" placeholder="Descripcion" ref="descripcion" />
                            </div>
                            <div className="col">
                                <label className="left">Proveedor</label>
                                <input type="text" className="form-control" placeholder="Proveedor" ref="proveedor" />
                            </div>
                        </div>

                        <br/>

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
)(MateriaprimaPost);