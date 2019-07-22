import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postInventario } from '../../actions/Inventario'
import InventarioCover from '../Actvidad/ActividadCover'
import NavBar from '../NavBar/Navbar'
import { Redirect } from 'react-router';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postInventario
    }, dispatch)
}

class InventarioPost extends Component {

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
        const idkardex = this.refs.codigo.value;
        const fecha = this.refs.fecha.value;
        const transaccion = this.refs.transaccion.value;
        const cantidad = this.refs.cantidad.value;
        const item = this.refs.item.value;
        const motivo = this.refs.motivo.value;
        const Empleado = {
            idkardex,
            fecha,
            transaccion,
            cantidad,
            item,
            motivo
        }
        this.props.postInventario(Empleado);
    }

    render() {
        if (this.state.isRedirected) {
            return (
                <Redirect to={"/inventario"} />
            );
        }
        return (
            <div>
                <NavBar />
                < InventarioCover />
                <br />
                <div className="container">
                    <form>

                        <div className="form-group">
                            <label className="left">Codigo</label>
                            <input type="text" className="form-control" ref="codigo" placeholder="Codigo" />
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="left">Item</label>
                                <input type="text" className="form-control" placeholder="Item" ref="item" />
                            </div>
                            <div className="col">
                                <label className="left">Fecha</label>
                                <input type="text" className="form-control" placeholder="Apellido" ref="fecha" />
                            </div>
                            <div className="form-group">
                                <label className="left">Transaccion</label>
                                <select className="form-control" ref="transaccion">
                                    <option>Entrada</option>
                                    <option>Salida</option>
                                </select>
                            </div>
                        </div>

                        <br />

                        <div className="row">
                            <div className="col">
                                <label className="left">Cantidad</label>
                                <input type="text" className="form-control" placeholder="Cantidad" ref="cantidad" />
                            </div>
                            <div className="col">
                                <label className="left">Motivo</label>
                                <input type="text" className="form-control" placeholder="Motivo" ref="motivo" />
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
)(InventarioPost);