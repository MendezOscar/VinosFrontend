export const getProductos = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_PRODUCTOS':
            return action;
        case 'COMPLETE_GET_PRODUCTOS':
            return action;
        case 'ERROR_GET_PRODUCTOS':
            return action;
        default:
            return state;
    }
}

export const postProducto = (state = [], action) => {
    switch (action.type) {
        case 'START_POST_PRODUCTO':
            return action;
        case 'COMPLETE_POST_PRODUCTOS':
            return action;
        case 'ERROR_POST_PRODUCTOS':
            return action;
        default:
            return state;
    }
}