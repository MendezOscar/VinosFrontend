import http from './http'

const startGetInventario = () => { return { type: 'START_GET_INVENTARIO', ready: false } }
const completeGetInventario = (data) => { return { type: 'COMPLETE_GET_INVENTARIO', data } }
const errorGetInventario = (err) => { return { type: 'ERROR_GET_INVENTARIO', err } }

const startPostInventario = () => { return { type: 'START_POST_INVENTARIO', ready: false } }
const completePostInventario = (data) => { return { type: 'COMPLETE_POST_INVENTARIO', data } }
const errorPostInventario = (err) => { return { type: 'ERROR_POST_INVENTARIO', err } }

export const getInventario = () => {
    return (dispatch) => {
        dispatch(startGetInventario());
        http.get('/api/Kardex').then((response) => {
            if (response.data) {
                dispatch(completeGetInventario(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorGetInventario(err));
            })
    }
}

export const postInventario = (Inventario) => {
    return (dispatch) => {
        dispatch(startPostInventario());
        http.post('/api/Kardex',
            {
                idkardex: Inventario.idkardex,
                fecha: Inventario.fecha,
                transaccion: Inventario.transaccion,
                cantidad: Inventario.cantidad,
                item: Inventario.item,
                motivo:  Inventario.motivo
            }).then((response) => {
                if (response.data) {
                    dispatch(completePostInventario(response.data));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(errorPostInventario(err));
            })
    }
}
