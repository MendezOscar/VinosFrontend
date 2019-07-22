export const getMateriaPrimaOrden = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_MATERIAPRIMA_ORDEN':
            return action;
        case 'COMPLETE_GET_MATERIAPRIMA_ORDEN':
            return action;
        case 'ERROR_GET_MATERIAPRIMA_ORDEN':
            return action;
        default:
            return state; 
    }
}

export const postMateriaPrimaOrden = (state = [], action) => {
    switch (action.type) {
        case 'START_POST_MATERIAPRIMA_ORDEN':
            return action;
        case 'COMPLETE_POST_MATERIAPRIMA_ORDEN':
            return action;
        case 'ERROR_POST_MATERIAPRIMA_ORDEN':
            return action;
        default:
            return state;
    }
}