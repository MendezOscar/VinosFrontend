import React, { Component } from 'react';
import './index.css'

class OdendeproduccionItem extends Component {

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
        const { idorden, descripcion, fecha, estado } = this.props;
        let estilo;
        var url = "/detailorden/" + idorden;
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
                        Numero de orden: {idorden}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{descripcion}</h5>
                        <p className="card-text">{fecha.substring(0, 10)}</p>
                        <p className={estilo}>{estado}</p>
                        <a href={url} className="btn btn-primary">Ver detalle</a>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

export default OdendeproduccionItem;