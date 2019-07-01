import http from './http'

const startGetMateriaprima = () => { return { type: 'START_GET_MATERIAPRIMA', ready: false } }
const completeGetMateriaprima = (data) => { return { type: 'COMPLETE_GET_MATERIAPRIMA', data } }
const errorGetMateriaprima = (err) => { return { type: 'ERROR_GET_MATERIAPRIMA', err } }

const startPostMateriaprima = () => { return { type: 'START_POST_MATERIAPRIMA', ready: false } }
const completePostMateriaprima = (data) => { return { type: 'COMPLETE_POST_MATERIAPRIMA', data } }
const errorPostMateriaprima = (err) => { return { type: 'ERROR_POST_MATERIAPRIMA', err } }

export const getMateriaprima = () => {
    return (dispatch) => {
        dispatch(startGetMateriaprima());
        http.get('/api/Materiaprima').then((response) => {
            if (response.data) {
                dispatch(completeGetMateriaprima(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorGetMateriaprima(err));
            })
    }
}

export const postMateriaprima = (Materiaprima) => {
    return (dispatch) => {
        dispatch(startPostMateriaprima());
        http.post('/api/Materiaprima',
            {
                idmateriaprima: Materiaprima.idmateriaprima,
                nombre: Materiaprima.nombre,
                descripcion: Materiaprima.descripcion,
                idproveedor: Materiaprima.idproveedor
            }).then((response) => {
                if (response.data) {
                    dispatch(completePostMateriaprima(response.data));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(errorPostMateriaprima(err));
            })
    }
}