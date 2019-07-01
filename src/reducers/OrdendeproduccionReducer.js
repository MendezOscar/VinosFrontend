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