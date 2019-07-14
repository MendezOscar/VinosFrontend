export const getPersonalVisita = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_PERSONAL_VISITA':
            return action;
        case 'COMPLETE_GET_PERSONAL_VISITA':
            return action;
        case 'ERROR_GET_PERSONAL_VISITA':
            return action;
        default:
            return state; 
    }
}

export const postPersonalVisita = (state = [], action) => {
    switch (action.type) {
        case 'START_POST_PERSONAL_VISITA':
            return action;
        case 'COMPLETE_POST_PERSONAL_VISITA':
            return action;
        case 'ERROR_POST_PERSONAL_VISITA':
            return action;
        default:
            return state;
    }
}