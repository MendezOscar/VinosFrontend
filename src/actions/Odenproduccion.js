import http from './http'

const startGetOrdendeproduccion  = () => { return { type: 'START_GET_ORDENDEPRODUCCION', ready: false } }
const completeGetOrdendeproduccion  = (data) => { return { type: 'COMPLETE_GET_ORDENDEPRODUCCION', data } }
const errorGetOrdendeproduccion  = (err) => { return { type: 'ERROR_GET_ORDENDEPRODUCCION', err } }

const startGetOrdenProduccionById = () => { return { type: 'START_GET_ORDENPRODUCCION_BY_ID', ready: false } }
const completeGetOrdenProduccionById = (data) => { return { type: 'COMPLETE_GET_ORDENPRODUCCION_BY_ID', data } }
const errorGetOrdenProduccionById = (err) => { return { type: 'ERROR_GET_ORDENPRODUCCION_BY_ID', err } }

export const getOrdendeproduccion = () => {
    return (dispatch) => {
        dispatch(startGetOrdendeproduccion());
        http.get('/api/Ordendeproduccion').then((response) => {
            if (response.data) {
                dispatch(completeGetOrdendeproduccion(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorGetOrdendeproduccion(err));
            })
    }
}

export const getOrdenProduccionById = (orden) => {
    return (dispatch) => {
        dispatch(startGetOrdenProduccionById());
        http.get('/api/Ordendeproduccion/' + orden).then((response) => {
            if (response.data) {
                dispatch(completeGetOrdenProduccionById(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorGetOrdenProduccionById(err));
            })
    }
}