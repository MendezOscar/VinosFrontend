import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class Menu extends Component {
 
    componentWillMount() {
        M.AutoInit();
    }
    
    render() {
        return (
            <div>
                <ul className="collapsible popout">
                    <li>
                    <div className="collapsible-header"><i className="material-icons">content_paste</i>Actividades</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header"><i className="material-icons">face</i>Empleados</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header"><i className="material-icons">local_florist</i>Fincas</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header"><i className="material-icons">straighten</i>Inventario</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header"><i className="material-icons">shopping_cart</i>Materia prima</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header"><i className="material-icons">shop</i>Ordenes de produccion</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header"><i className="material-icons">subject</i>Recetas</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header"><i className="material-icons">streetview</i>Visitas</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;