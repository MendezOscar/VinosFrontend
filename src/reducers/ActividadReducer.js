export const getActividades = ( state = [], action) => {
    switch(action.type){
        case 'START_GET_ACTIVIDADES':
            return action;
        case 'COMPLETE_GET_ACTIVIDADES':
            return action;
        case 'ERROR_GET_ACTIVIDADES':
            return action;
        default:
            return state;
    }
}

export const postActividad = ( state = [], action) => {
    switch(action.type){
        case 'START_POST_ACTIVIDAD':
            return action;
        case 'COMPLETE_POST_ACTIVIDAD':
            return action;
        case 'ERROR_POST_ACTIVIDAD':
            return action;
        default:
            return state;
    }
}