export const getInventario = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_INVENTARIO':
            return action;
        case 'COMPLETE_GET_INVENTARIO':
            return action;
        case 'ERROR_GET_INVENTARIO':
            return action;
        default:
            return state;
    }
}

export const postInventario = (state = [], action) => {
    switch (action.type) {
        case 'START_POST_INVENTARIO':
            return action;
        case 'COMPLETE_POST_INVENTARIO':
            return action;
        case 'ERROR_POST_INVENTARIO':
            return action;
        default:
            return state;
    }
}