import React, { Component } from 'react';

class VisitaDetailBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            descripcion: this.props.descripcion,
            fecha: this.props.fecha,
            numero: this.props.numero
        }
    }
    
    render() {
        let {descripcion, fecha, numero } = this.state;

        return (
            <div className="row">
                <div className="col s12 m5 offset-m5 l6 offset-l3 ">
                <div className="VisitaDetailBody">
                <div>
                    <ul className="collection">
                    <li className="collection-item">Descripcion: { descripcion }</li>
                    <li className="collection-item">Fecha: { fecha.substring(0,10) }</li>
                    <li className="collection-item">Numero: { numero }</li>
                </ul>
                </div>
             </div>
            </div>
            </div>
        );
    }
}

export default VisitaDetailBody;