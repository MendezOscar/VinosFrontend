import { combineReducers } from 'redux';
import { getVisitas, getVisitaById } from './VisitasReducer';
import { getActividades, postActividad } from './ActividadReducer'
import { getEmpleados, postEmpleado } from './EmpleadoReducer'
import { getFincas, postFinca } from './FincaReducer'
import { getProductos, postProducto } from './ProductoReducer'
import { getProveedores, postProveedor } from './ProveedorReducer'
import { getMateriaprima, postMateriaprima } from './Materiaprima'
import { getInventario, postInventario } from './InventarioReducer'
import { getOrdendeproduccion } from './OrdendeproduccionReducer'

export default combineReducers({
    getVisitas,
    getVisitaById,

    getActividades,
    postActividad,

    getEmpleados,
    postEmpleado,

    getFincas,
    postFinca,

    getProductos,
    postProducto,

    getProveedores,
    postProveedor,

    getMateriaprima,
    postMateriaprima,

    getInventario,
    postInventario,

    getOrdendeproduccion,
});