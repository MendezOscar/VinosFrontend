import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

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
        const { descripcion, fecha, titulo, id } = this.props;
        var url = "detail/" + id;
        if (this.state.isRedirected) {
            return (
                <Redirect to={"detail/" + id} />
            );
        }
        return (
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <h6 className="card-title">{fecha.substring(0,10)}</h6>
                    <p className="card-text">{descripcion}</p>
                    <a href={url} className="card-link" >Ver Detalle</a>
                </div>
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