import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPersonalVisita } from '../../actions/PersonalVisita';

function mapStateToPropos(state) {
    return {
        personalvisita: state.getPersonalVisita
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getPersonalVisita
    }, dispatch)
}

class PersonalVisitaBody extends Component {

    componentWillMount() {
        this.props.getPersonalVisita();
    }

    render() {
        let personalVisita = [];
        if (this.props.personalvisita.data) {
            personalVisita = this.props.personalvisita.data.map((currentValue, index, array) => {
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
                    {personalVisita}
                </tbody>
            </table>
        </div>
        );
    }
}

export default connect(
    mapStateToPropos,
    mapDispatchToProps
)(PersonalVisitaBody);