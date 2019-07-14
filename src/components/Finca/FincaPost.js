import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postFinca } from '../../actions/Finca'
import { getProductos } from '../../actions/Producto'
import FincaCover from '../Finca/FincaCover'
import NavBar from '../NavBar/Navbar'
import { Redirect } from 'react-router';

function mapStateToPropos(state) {
    return {
        productos: state.getProductos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProductos,
        postFinca
    }, dispatch)
}


class FincaPost extends Component {

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
        const idfinca = this.refs.codigo.value;
        const nombre = this.refs.nombre.value;
        const direccion = this.refs.direccion.value;
        const dueno = this.refs.dueno.value;
        const contacto = this.refs.contacto.value;
        const idproducto = this.refs.idproducto.value;
        const Finca = {
            idfinca,
            nombre,
            direccion,
            dueno,
            contacto,
            idproducto
        }
        this.props.postFinca(Finca);
    }    

    

    render() {
        if (this.state.isRedirected) {
            return (
                <Redirect to={"/finca"} />
            );
        }
        return (
            <div>
                <NavBar />
                <FincaCover />
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

                        <br />
                        
                        <div className="row">
                            <div className="col">
                                <label className="left">Direccion</label>
                                <input type="text" className="form-control" placeholder="Direccion" ref="direccion" />
                            </div>
                        </div>

                        <br />

                        <div className="row">
                            <div className="col">
                                <label className="left">Dueno</label>
                                <input type="text" className="form-control" placeholder="Dueno" ref="dueno" />
                            </div>
                            <div className="col">
                                <label className="left">Contacto</label>
                                <input type="text" className="form-control" placeholder="Contacto" ref="contacto" />
                            </div>
                            <div className="col">
                                <label className="left">Producto</label>
                                <input type="text" className="form-control" placeholder="Producto" ref="idproducto" />
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
    mapStateToPropos,
    mapDispatchToProps
)(FincaPost);