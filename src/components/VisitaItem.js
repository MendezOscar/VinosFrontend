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

    onClick(e){
        this.setState({isRedirected:true});
    }
    

    render() {
        const {descripcion, fecha, numero, titulo, id} = this.props;
        if(this.state.isRedirected){
            return(
                <Redirect to={"detail/" + id}/>
            );
        }
        return (
            <div>
                <div className="col s6 m4">
                    <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">{titulo}</span>
                    <p align="left"> {descripcion}
                    </p>
                    <p align="left"> Fecha de visita : {fecha.substring(0,10)}</p>
                    <p align="left"> Numero de visita: {numero}</p>
                    </div>
                    <div className="card-action">
                    <a onClick={ this.onClick }>Ver detalle</a>
                    </div>
                </div>
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