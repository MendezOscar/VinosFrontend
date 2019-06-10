import React, { Component } from 'react';
import './index.css'

class VisitaDetailCover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cover: "https://cdn2.iconfinder.com/data/icons/business-office-icons/256/To-do_List-512.png"
        }
    }
    
    render() {
        const { titulo } = this.props;
        return (
            <div className="VisitaDetailCover">
                <img 
                src={this.state.cover} 
                className="VisitaDetailCover-img"
                alt="avatar"/>
                <div> 
                    <h5 className="UserDetailCover-name">{ titulo }</h5> 
                </div>   
            </div>
        );
    }
}

export default VisitaDetailCover;