import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postProveedor } from '../../actions/Proveedor'
import ProveedorCover from '../Proveedor/ProveedorCover'
import NavBar from '../NavBar/Navbar'
import { Redirect } from 'react-router';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postProveedor
    }, dispatch)
}

class ProveedorPost extends Component {

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
        const codigo = this.refs.codigo.value;
        const nombre = this.refs.nombre.value;
        const contacto = this.refs.contacto.value;
        const proveedor = {
            codigo,
            nombre,
            contacto,
        }
        this.props.postProveedor(proveedor);
    }

    render() {
        if (this.state.isRedirected) {
            return (
                <Redirect to={"/proveedor"} />
            );
        }
        return (
            <div>
                <NavBar />
                <ProveedorCover />
                <br />
                <div className="container">
                    <form>

                        <div className="row">
                            <div className="col">
                                <label className="left">Codigo</label>
                                <input type="text" className="form-control" placeholder="Codigo" ref="codigo" />
                            </div>
                            <div className="col">
                                <label className="left">Nombre</label>
                                <input type="text" className="form-control" placeholder="Nombre" ref="nombre" />
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col">
                                <label className="left">Contacto</label>
                                <input type="text" className="form-control" placeholder="Contacto" ref="contacto" />
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
)(ProveedorPost);