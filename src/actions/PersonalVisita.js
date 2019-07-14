import http from './http'

const startGetPersonalVisita = () => { return { type: 'START_GET_PERSONAL_VISITA', ready: false } }
const completeGetPersonalVisita = (data) => { return { type: 'COMPLETE_GET_PERSONAL_VISITA', data } }
const errorGetPersonalVisita = (err) => { return { type: 'ERROR_GET_PERSONAL_VISITA', err } }

const startPostPersonalVisita = () => { return { type: 'START_POST_PERSONAL_VISITA', ready: false } }
const completePostPersonalVisita = (data) => { return { type: 'COMPLETE_POST_PERSONAL_VISITA', data } }
const errorPostPersonalVisita = (err) => { return { type: 'ERROR_POST_PERSONAL_VISITA', err } }

export const getPersonalVisita = () => {
    return (dispatch) => {
        dispatch(startGetPersonalVisita());
        http.get('/api/Personalvisita').then((response) => {
            if (response.data) {
                console.log(response.data);
                dispatch(completeGetPersonalVisita(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorGetPersonalVisita(err));
            })
    }
}

export const postPersonalVisita = (PersonalVisita) => {
    return (dispatch) => {
        dispatch(startPostPersonalVisita());
        http.post('/api/Personalvisita',
            {
                idpersonalvisita: PersonalVisita.idpersonalvisita,
                idempleado: PersonalVisita.idempleado,
                idvisita: PersonalVisita.idvisita
            }).then((response) => {
                if (response.data) {
                    dispatch(completePostPersonalVisita(response.data));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(errorPostPersonalVisita(err));
            })
    }
}