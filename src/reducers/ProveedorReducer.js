export const getProveedores = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_PROVEEDORES':
            return action;
        case 'COMPLETE_GET_PROVEEDORES':
            return action;
        case 'ERROR_GET_PROVEEDORES':
            return action;
        default:
            return state;
    }
}

export const postProveedor = (state = [], action) => {
    switch (action.type) {
        case 'START_POST_PROVEEDOR':
            return action;
        case 'COMPLETE_POST_PROVEEDOR':
            return action;
        case 'ERROR_POST_PROVEEDOR':
            return action;
        default:
            return state;
    }
}