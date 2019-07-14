export const getActividadVisita = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_ACTIVIDAD_VISITA':
            return action;
        case 'COMPLETE_GET_ACTIVIDAD_VISITA':
            return action;
        case 'ERROR_GET_ACTIVIDAD_VISITA':
            return action;
        default:
            return state; 
    }
}

export const postActividadVisita = (state = [], action) => {
    switch (action.type) {
        case 'START_POST_ACTIVIDAD_VISITA':
            return action;
        case 'COMPLETE_POST_ACTIVIDAD_VISITA':
            return action;
        case 'ERROR_POST_ACTIVIDAD_VISITA':
            return action;
        default:
            return state;
    }
}