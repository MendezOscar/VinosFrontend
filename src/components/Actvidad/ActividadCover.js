import React, { Component } from 'react';
import './index.css'

class ActividadCover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cover: "https://cdn2.iconfinder.com/data/icons/business-office-icons/256/To-do_List-512.png"
        }
    }

    render() {
        return (
            <div className="ActividadDetailCover">
                <img 
                src={this.state.cover} 
                className="ActividadDetailCover-img"
                alt="avatar"/>
                <div> 
                    <br/>
                    <h5 className="ActividadCover-name">ACTIVIDADES</h5> 
                </div>   
            </div>
        );
    }
}

export default ActividadCover;