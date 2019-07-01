import React, { Component } from 'react';
import './index.css'

class OdendeproduccionCover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cover: "https://www.operames.it/images/icons/icon_industry.png"
        }
    }

    render() {
        return (
            <div>
                <div className="OrdenDetailCover">
                    <img
                        src={this.state.cover}
                        className="OrdenDetailCover-img"
                        alt="avatar" />
                    <div>
                        <h5 className="OrdenCover-name">Ordenes de produccion</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default OdendeproduccionCover;