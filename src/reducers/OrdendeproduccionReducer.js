export const getOrdendeproduccion = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_ORDENDEPRODUCCION':
            return action;
        case 'COMPLETE_GET_ORDENDEPRODUCCION':
            return action;
        case 'ERROR_GET_ORDENDEPRODUCCION':
            return action;
        default:
            return state;
    }
}

export const getOrdenProduccionById = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_ORDENPRODUCCION_BY_ID':
            return action;
        case 'COMPLETE_GET_ORDENPRODUCCION_BY_ID':
            return action;
        case 'ERROR_GET_ORDENPRODUCCION_BY_ID':
            return action;
        default:
            return state;
    }
}