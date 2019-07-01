import React, { Component } from 'react';
import './Index.css'

class MateriaPrimaCover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cover: "https://image.flaticon.com/icons/png/512/479/479069.png"
        }
    }

    render() {
        return (
            <div className="MateriaPrimaDetailCover">
                <img
                    src={this.state.cover}
                    className="MateriaPrimaDetailCover-img"
                    alt="avatar" />
                <div>
                    <h5 className="MateriaPrimaCover-name">Materia Prima</h5>
                </div>
            </div>
        );
    }
}

export default MateriaPrimaCover;