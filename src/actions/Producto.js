import http from './http'

const startGetProductos = () => { return { type: 'START_GET_PRODUCTOS', ready: false } }
const completeGetProductos = (data) => { return { type: 'COMPLETE_GET_PRODUCTOS', data } }
const errorGetProductos = (err) => { return { type: 'ERROR_GET_PRODUCTOS', err } }

const startGetProductoById = () => { return { type: 'START_GET_PRODUCTO_BY_ID', ready: false } }
const completeGetProductoById = (data) => { return { type: 'COMPLETE_GET_PRODUCTO_BY_ID', data } }
const errorGetProductoById = (err) => { return { type: 'ERROR_GET_PRODUCTO_BY_ID', err } }

const startPostProducto = () => { return { type: 'START_POST_PRODUCTO', ready: false } }
const completePostProducto = (data) => { return { type: 'COMPLETE_POST_PRODUCTO', data } }
const errorPostProducto = (err) => { return { type: 'ERROR_POST_PRODUCTO', err } }

export const getProductos = () => {
    return (dispatch) => {
        dispatch(startGetProductos());
        http.get('/api/Producto').then((response) => {
            if (response.data) {
                console.log(response.data);
                dispatch(completeGetProductos(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorGetProductos(err));
            })
    }
}

export const getProductoById = (producto) => {
    return (dispatch) => {
        dispatch(startGetProductoById());
        http.get('/api/Producto/' + producto).then((response) => {
            if (response.data) {
                dispatch(completeGetProductoById(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorGetProductoById(err));
            })
    }
}

export const postProducto = (Producto) => {
    return (dispatch) => {
        dispatch(startPostProducto());
        http.post('/api/Producto',
            {
                idproducto: Producto.codigo,
                nombre: Producto.nombre,
            }).then((response) => {
                if (response.data) {
                    dispatch(completePostProducto(response.data));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(errorPostProducto(err));
            })
    }
}
