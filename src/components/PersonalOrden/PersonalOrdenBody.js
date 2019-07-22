import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPersonalOrden } from '../../actions/PersonalOrden';

function mapStateToPropos(state) {
    return {
        personalOrden: state.getPersonalOrden
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getPersonalOrden
    }, dispatch)
}


class PersonalOrdenBody extends Component {

    componentWillMount() {
        this.props.getPersonalOrden();
    }

    render() {
        let personalOrden = [];
        if (this.props.personalOrden.data) {
            personalOrden = this.props.personalOrden.data.map((currentValue, index, array) => {
                if (currentValue.idorden === this.props.idorden) {
                    return (
                        <tr key={index} bgcolor="#ffffff">
                            <td className="">{currentValue.idempleado}</td>
                            <td>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-info">
                                        <i className="fa fa-pencil"></i>
                                    </button>
                                    <button onClick={this.borrarActividad} type="button" className="btn btn-danger">
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    );
                }
                return false;
            })
        }
        return (
            <div>
                <table className="table table-hover">
                    <thead className="theadColor">
                        <tr>
                            <th scope="col">Personal</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personalOrden}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(PersonalOrdenBody);