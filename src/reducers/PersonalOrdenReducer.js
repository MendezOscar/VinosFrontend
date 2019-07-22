export const getPersonalOrden = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_PERSONAL_ORDEN':
            return action;
        case 'COMPLETE_GET_PERSONAL_ORDEN':
            return action;
        case 'ERROR_GET_PERSONAL_ORDEN':
            return action;
        default:
            return state; 
    }
}

export const postPersonalOrden = (state = [], action) => {
    switch (action.type) {
        case 'START_POST_PERSONAL_ORDEN':
            return action;
        case 'COMPLETE_POST_PERSONAL_ORDEN':
            return action;
        case 'ERROR_POST_PERSONAL_ORDEN':
            return action;
        default:
            return state;
    }
}