import { combineReducers } from 'redux';
import {getVisitas, getVisitaById} from './VisitasReducer';
import { getActividades, postActividad } from './ActividadReducer'

export default combineReducers({
    getVisitas,
    getVisitaById,
    getActividades,
    postActividad,
 });