import React, { Component } from 'react';
import './index.css'

class FincaCover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cover: "https://lifelobo.es/wp-content/uploads/2017/11/Icono-Cotos-y-fincas.png"
        }
    }

    render() {
        return (
            <div>
                <div className="FincaDetailCover">
                    <img
                        src={this.state.cover}
                        className="FincaDetailCover-img"
                        alt="avatar" />
                    <div>
                        <h5 className="FincaCover-name">Fincas</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default FincaCover;