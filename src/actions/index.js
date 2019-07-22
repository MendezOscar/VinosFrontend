import http from './http'

const startGetVisitas = () => { return { type: 'START_GET_VISITAS', ready: false } }
const completeGetVisitas = (data) => { return { type: 'COMPLETE_GET_VISITAS', data } }
const errorGetVisitas = (err) => { return { type: 'ERROR_GET_VISITAS', err } }

const startGetVisitaById = () => { return { type: 'START_GET_VISITA_BY_ID', ready: false } }
const completeGetVisitaById = (data) => { return { type: 'COMPLETE_GET_VISITA_BY_ID', data } }
const errorGetVisitaById = (err) => { return { type: 'ERROR_GET_VISITA_BY_ID', err } }

const startPostVisitaById = () => { return { type: 'START_POST_VISITA_BY_ID', ready: false } }
const completePostVisitaById = (data) => { return { type: 'COMPLETE_POST_VISITA_BY_ID', data } }
const errorPostVisitaById = (err) => { return { type: 'ERROR_POST_VISITA_BY_ID', err } }

export const getVisitas = () => {
    return (dispatch) => {
        dispatch(startGetVisitas());
        http.get('/api/visita').then((response) => {
            if (response.data) {
                dispatch(completeGetVisitas(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorGetVisitas(err));
            })
    }
}

export const getVisitaById = (visita) => {
    return (dispatch) => {
        dispatch(startGetVisitaById());
        http.get('/api/Visita/' + visita).then((response) => {
            if (response.data) {
                console.log(response.data);
                dispatch(completeGetVisitaById(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorGetVisitaById(err));
            })
    }
}

export const postVisita = (visitaId) => {
    return (dispatch) => {
        dispatch(startPostVisitaById());
        http.get('/api/Visita/', {

        }).then((response) => {
            if (response.data) {
                dispatch(completePostVisitaById(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorPostVisitaById(err));
            })
    }
}