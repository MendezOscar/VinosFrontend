import http from './http'

const startGetFincas = () => { return { type: 'START_GET_FINCAS', ready: false } }
const completeGetFincas = (data) => { return { type: 'COMPLETE_GET_FINCAS', data } }
const errorGetFincas = (err) => { return { type: 'ERROR_GET_FINCAS', err } }

const startPostFinca = () => { return { type: 'START_POST_FINCA', ready: false } }
const completePostFinca = (data) => { return { type: 'COMPLETE_POST_FINCA', data } }
const errorPostFinca = (err) => { return { type: 'ERROR_POST_FINCA', err } }

export const getFincas = () => {
    return (dispatch) => {
        dispatch(startGetFincas());
        http.get('/api/Finca').then((response) => {
            if (response.data) {
                dispatch(completeGetFincas(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorGetFincas(err));
            })
    }
}

export const postFinca = (Finca) => {
    return (dispatch) => {
        dispatch(startPostFinca());
        http.post('/api/Finca',
            {
                idfinca: Finca.idfinca,
                nombre: Finca.nombre,
                direccion: Finca.direccion,
                dueno: Finca.dueno,
                contacto: Finca.contacto,
                idproducto:  Finca.idproducto
            }).then((response) => {
                if (response.data) {
                    dispatch(completePostFinca(response.data));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(errorPostFinca(err));
            })
    }
}
