import http from './http'

const startGetActividadVisita = () => { return { type: 'START_GET_ACTIVIDAD_VISITA', ready: false } }
const completeGetActividadVisita = (data) => { return { type: 'COMPLETE_GET_ACTIVIDAD_VISITA', data } }
const errorGetActividadVisita = (err) => { return { type: 'ERROR_GET_ACTIVIDAD_VISITA', err } }

const startPostActividadVisita = () => { return { type: 'START_POST_ACTIVIDAD_VISITA', ready: false } }
const completePostActividadVisita = (data) => { return { type: 'COMPLETE_POST_ACTIVIDAD_VISITA', data } }
const errorPostActividadVisita = (err) => { return { type: 'ERROR_POST_ACTIVIDAD_VISITA', err } }

export const getActividadVisita = () => {
    return (dispatch) => {
        dispatch(startGetActividadVisita());
        http.get('/api/Actividadvisita').then((response) => {
            if (response.data) {
                dispatch(completeGetActividadVisita(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorGetActividadVisita(err));
            })
    }
}

export const postActividadVisita = (ActividadVisita) => {
    return (dispatch) => {
        dispatch(startPostActividadVisita());
        http.post('/api/Actividadvisita',
            {
                actividadvisita1: ActividadVisita.actividadvisita,
                idactividad: ActividadVisita.idactividad,
                idvisita: ActividadVisita.idvisita
            }).then((response) => {
                if (response.data) {
                    dispatch(completePostActividadVisita(response.data));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(errorPostActividadVisita(err));
            })
    }
}