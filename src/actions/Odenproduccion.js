import http from './http'

const startGetOrdendeproduccion  = () => { return { type: 'START_GET_ORDENDEPRODUCCION', ready: false } }
const completeGetOrdendeproduccion  = (data) => { return { type: 'COMPLETE_GET_ORDENDEPRODUCCION', data } }
const errorGetOrdendeproduccion  = (err) => { return { type: 'ERROR_GET_ORDENDEPRODUCCION', err } }

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