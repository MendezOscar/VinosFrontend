import React, { Component } from 'react';
import MateriaPrimaOrden from '../MateriaPrimaOrden/MateriaPrimaOrdenBody'
import PersonalOrden from '../PersonalOrden/PersonalOrdenBody'

class OdendeproduccionBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ordenId: this.props.ordenId,
            descripcion: this.props.descripcion,
            fecha: this.props.fecha,
            cantidad: this.props.cantidad,
            item: this.props.item,
            estado: this.props.estado
        }
    }

    render() {
        let { ordenId, descripcion, fecha, cantidad, item, estado } = this.state;
        return (
            <div>
                <table className="table table-hover">
                    <thead className="theadColor">
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Finca</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Item</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={ordenId} bgcolor="#ffffff">
                            <td>{ordenId}</td>
                            <td className="">{descripcion}</td>
                            <td className="">{fecha.substring(0, 10)}</td>
                            <td className="">{cantidad}</td>
                            <td className="">{item}</td>
                            <td className="">{estado}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <a className="btnCreate" href="/crearmateriaprimaorden" role="button">Añadir materia prima para esta orden</a>
                            <br />
                            <MateriaPrimaOrden idorden={ordenId} />
                        </div>

                        <div className="col-sm">
                            <a className="btnCreate" href="/crearpersonalorden" role="button">Añadir empleados para esta orden</a>
                            <PersonalOrden idorden={ordenId} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OdendeproduccionBody;