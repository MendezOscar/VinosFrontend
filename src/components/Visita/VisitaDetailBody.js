import React, { Component } from 'react';
import ActividadVisitaBody from '../ActividadVisita/ActividadVisitaBody'
import PersonalVisitaBody from '../PersonalVisita/PersonalVisitaBody'

class VisitaDetailBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            descripcion: this.props.descripcion,
            fecha: this.props.fecha,
            numero: this.props.numero,
            idfinca: this.props.idfinca,
            idvisita: this.props.idvisita,
            estado: this.props.estado
        }
    }

    render() {
        let { descripcion, fecha, numero, idfinca, idvisita, estado } = this.state;

        return (
            <div>
                <table className="table table-hover">
                    <thead className="theadColor">
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Finca</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Numero de visita</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={idvisita} bgcolor="#ffffff">
                            <td>{idvisita}</td>
                            <td className="">{idfinca}</td>
                            <td className="">{descripcion}</td>
                            <td className="">{fecha.substring(0, 10)}</td>
                            <td className="">{numero}</td>
                            <td className="">{estado}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <a className="btnCreate" href="/crearactividadvisita" role="button">Añadir actividades para esta visita</a>
                            <br/>
                            <ActividadVisitaBody idvisita = {idvisita}/>
                        </div>

                        <div className="col-sm">
                            <a className="btnCreate" href="/crearpersonalvisita" role="button">Añadir empleados para esta visita</a>
                            <PersonalVisitaBody idvisita = {idvisita}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VisitaDetailBody;