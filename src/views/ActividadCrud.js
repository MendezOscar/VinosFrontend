import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import ActividadBody from '../components/Actvidad/ActividadBody'
import ActividadCover from '../components/Actvidad/ActividadCover'
import ActividadPost from '../components/Actvidad/ActividadPost'

class ActividadCrud extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <ActividadCover/>
                <div className="row">
                    <div className="col s12 m4">
                        <ActividadBody/>
                    </div>
                    <div className="col s12 m4 l2">
                        <ActividadPost/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActividadCrud;