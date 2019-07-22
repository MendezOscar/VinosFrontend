import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postMateriaPrimaOrden } from '../../actions/MateriaPrimaOrden'
import OrdendeproduccionCover from '../Ordendeproduccion/OdendeproduccionCover'
import NavBar from '../NavBar/Navbar'
import { Redirect } from 'react-router';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postMateriaPrimaOrden
    }, dispatch)
}

class MateriaPrimaOrdenPost extends Component {

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
        const idmateriaprimaorden = this.refs.idmateriaprimaorden.value;
        const idmateriaprima = this.refs.idmateriaprima.value;
        const idorden = this.refs.idorden.value;
        const materiaPrima = {
            idmateriaprimaorden,
            idmateriaprima,
            idorden,
        }
        this.props.postMateriaPrimaOrden(materiaPrima);
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
                <OrdendeproduccionCover />
                <br />
                <div className="container">
                    <form>

                        <div className="row">
                            <div className="col">
                                <label className="left">Codigo de materia prima orden</label>
                                <input type="text" className="form-control" placeholder="Codigo de materia prima orden" ref="idmateriaprimaorden" />
                            </div>
                            <div className="col">
                                <label className="left">Codigo de la materia prima</label>
                                <input type="text" className="form-control" placeholder="Codigo de la materia prima" ref="idmateriaprima" />
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
)(MateriaPrimaOrdenPost);