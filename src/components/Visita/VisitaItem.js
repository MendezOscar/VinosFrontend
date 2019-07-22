import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import './index.css'

class VisitaItem extends Component {

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


    render() {
        const { descripcion, fecha, titulo, id, estado } = this.props;
        let estilo;
        var url = "detailvisita/" + id;
        if (this.state.isRedirected) {
            return (
                <Redirect to={"detailvisita/" + id} />
            );
        }
        if(estado === "Nueva"){
            estilo = "BlueColor"
        }else if(estado === "En proceso"){
            estilo = "GreenColor"
        }else if(estado === "Finalizada"){
            estilo = "YelowColor"
        }
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        {titulo}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{descripcion}</h5>
                        <h5 className={estilo}>{estado}</h5>
                        <p className="card-text">{fecha.substring(0, 10)}</p>
                        <a href={url} className="btn btn-primary">Ver detalle</a>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

VisitaItem.propTypes = {
    descripcion: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
}

export default VisitaItem;