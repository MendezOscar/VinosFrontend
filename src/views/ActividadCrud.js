import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import ActividadBody from '../components/Actvidad/ActividadBody'
import ActividadCover from '../components/Actvidad/ActividadCover'
import ActividadPost from '../components/Actvidad/ActividadPost'
import TableHeader from '../components/Actvidad/TableHeader'

class ActividadCrud extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <ActividadCover/>
                <div className="row">
                    <div className="col s12 m7">
                        <TableHeader/>
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