import React, { Component } from 'react';
import './index.css'

class EmpleadoCover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cover: "https://image.flaticon.com/icons/png/512/305/305992.png"
        }
    }

    render() {
        return (
            <div>
                <div className="EmpleadoDetailCover">
                    <img
                        src={this.state.cover}
                        className="EmpleadoDetailCover-img"
                        alt="avatar" />
                    <div>
                        <h5 className="EmpleadoCover-name">Empleados</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmpleadoCover;