import http from './http'

const startGetMateriaPrimaOrden = () => { return { type: 'START_GET_MATERIAPRIMA_ORDEN', ready: false } }
const completeGetMateriaPrimaOrden = (data) => { return { type: 'COMPLETE_GET_MATERIAPRIMA_ORDEN', data } }
const errorGetMateriaPrimaOrden = (err) => { return { type: 'ERROR_GET_MATERIAPRIMA_ORDEN', err } }

const startPostMateriaPrimaOrden = () => { return { type: 'START_POST_MATERIAPRIMA_ORDEN', ready: false } }
const completePostMateriaPrimaOrden = (data) => { return { type: 'COMPLETE_POST_MATERIAPRIMA_ORDEN', data } }
const errorPostMateriaPrimaOrden = (err) => { return { type: 'ERROR_POST_MATERIAPRIMA_ORDEN', err } }

export const getMateriaPrimaOrden = () => {
    return (dispatch) => {
        dispatch(startGetMateriaPrimaOrden());
        http.get('/api/Materiaprimaorden').then((response) => {
            if (response.data) {
                console.log(response.data);
                dispatch(completeGetMateriaPrimaOrden(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorGetMateriaPrimaOrden(err));
            })
    }
}


export const postMateriaPrimaOrden  = (MateriaPrima) => {
    return (dispatch) => {
        dispatch(startPostMateriaPrimaOrden());
        http.post('/api/Materiaprimaorden',
            {
                idmateriaprimaorden: MateriaPrima.idmateriaprimaorden,
                idmateriaprima: MateriaPrima.idmateriaprima,
                idorden: MateriaPrima.idorden
            }).then((response) => {
                if (response.data) {
                    dispatch(completePostMateriaPrimaOrden(response.data));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(errorPostMateriaPrimaOrden(err));
            })
    }
}