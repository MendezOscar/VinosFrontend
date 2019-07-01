import http from './http'

const startGetProveedores = () => { return { type: 'START_GET_PROVEEDORES', ready: false } }
const completeGetProveedores = (data) => { return { type: 'COMPLETE_GET_PROVEEDORES', data } }
const errorGetProveedores = (err) => { return { type: 'ERROR_GET_PROVEEDORES', err } }

const startPostProveedor = () => { return { type: 'START_POST_PROVEEDOR', ready: false } }
const completePostProveedor = (data) => { return { type: 'COMPLETE_POST_PROVEEDOR', data } }
const errorPostProveedor = (err) => { return { type: 'ERROR_POST_ACTIVIDAD', err } }

export const getProveedores = () => {
    return (dispatch) => {
        dispatch(startGetProveedores());
        http.get('/api/Proveedor').then((response) => {
            if (response.data) {
                dispatch(completeGetProveedores(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorGetProveedores(err));
            })
    }
}

export const postProveedor = (Proveedor) => {
    return (dispatch) => {
        dispatch(startPostProveedor());
        http.post('/api/Proveedor',
            {
                idproveedor: Proveedor.idproveedor,
                nombre: Proveedor.nombre,
                contacto: Proveedor.contacto
            }).then((response) => {
                if (response.data) {
                    dispatch(completePostProveedor(response.data));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(errorPostProveedor(err));
            })
    }
}