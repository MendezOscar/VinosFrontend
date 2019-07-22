import { combineReducers } from 'redux';
import { getVisitas, getVisitaById } from './VisitasReducer';
import { getActividades, postActividad, getActividadById, deleteActividad } from './ActividadReducer'
import { getEmpleados, postEmpleado } from './EmpleadoReducer'
import { getFincas, postFinca } from './FincaReducer'
import { getProductos, postProducto, getProductoById } from './ProductoReducer'
import { getProveedores, postProveedor } from './ProveedorReducer'
import { getMateriaprima, postMateriaprima } from './Materiaprima'
import { getInventario, postInventario } from './InventarioReducer'
import { getOrdendeproduccion, getOrdenProduccionById } from './OrdendeproduccionReducer'
import { getActividadVisita, postActividadVisita } from './ActividadVisitaReducer'
import { getPersonalVisita, postPersonalVisita } from './PersonalVisitaReducer'
import { getMateriaPrimaOrden, postMateriaPrimaOrden } from './MateriaPrimaOrdenReducer'
import { getPersonalOrden, postPersonalOrden } from './PersonalOrdenReducer'

export default combineReducers({
    getVisitas, getVisitaById,

    getActividades, postActividad, getActividadById, deleteActividad,

    getEmpleados, getProductoById, postEmpleado,

    getFincas, postFinca,

    getProductos, postProducto,

    getProveedores, postProveedor,

    getMateriaprima, postMateriaprima,

    getInventario, postInventario,

    getOrdendeproduccion, getOrdenProduccionById,

    getActividadVisita, postActividadVisita,

    getPersonalVisita, postPersonalVisita,

    getMateriaPrimaOrden, postMateriaPrimaOrden,

    getPersonalOrden, postPersonalOrden,
});