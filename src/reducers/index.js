import { combineReducers } from 'redux';
import {getVisitas, getVisitaById} from './VisitasReducer';

export default combineReducers({
    getVisitas,
    getVisitaById
 });