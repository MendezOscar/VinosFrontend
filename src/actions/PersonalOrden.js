import http from './http'

const startGetPersonalOrden = () => { return { type: 'START_GET_PERSONAL_ORDEN', ready: false } }
const completeGetPersonalOrden = (data) => { return { type: 'COMPLETE_GET_PERSONAL_ORDEN', data } }
const errorGetPersonalOrden = (err) => { return { type: 'ERROR_GET_PERSONAL_ORDEN', err } }

const startPostPersonalOrden = () => { return { type: 'START_POST_PERSONAL_ORDEN', ready: false } }
const completePostPersonalOrden = (data) => { return { type: 'COMPLETE_POST_PERSONAL_ORDEN', data } }
const errorPostPersonalOrden = (err) => { return { type: 'ERROR_POST_PERSONAL_ORDEN', err } }

export const getPersonalOrden = () => {
    return (dispatch) => {
        dispatch(startGetPersonalOrden());
        http.get('/api/Personalorden').then((response) => {
            if (response.data) {
                dispatch(completeGetPersonalOrden(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorGetPersonalOrden(err));
            })
    }
}

export const postPersonalOrden = (PersonalVisita) => {
    return (dispatch) => {
        dispatch(startPostPersonalOrden());
        http.post('/api/Personalorden',
            {
                idpersonal: PersonalVisita.idpersonal,
                idempleado: PersonalVisita.idempleado,
                idorden: PersonalVisita.idorden
            }).then((response) => {
                if (response.data) {
                    dispatch(completePostPersonalOrden(response.data));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(errorPostPersonalOrden(err));
            })
    }
}