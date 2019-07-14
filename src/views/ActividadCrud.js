import React, { Component } from 'react';
import Navbar from '../components/NavBar/Navbar'
import ActividadBody from '../components/Actvidad/ActividadBody'
import ActividadCover from '../components/Actvidad/ActividadCover'
import { Redirect } from 'react-router';
import './index.css'
//import ActividadPost from '../components/Actvidad/ActividadPost'

class ActividadCrud extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRedirected: false
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        return (<Redirect to="/crearactividad"></Redirect>);
    }

    render() {
        return (
            <div>
                <Navbar />
                <ActividadCover />
                <br />
                <div className="left">
                    <a className="btnCreate" href="/crearactividad" role="button">Crear nueva actividad</a>
                </div>
                <br />
                <div className="container">
                    <ActividadBody />
                </div>

            </div>
        );
    }
}

export default ActividadCrud;