export const getVisitas = ( state = [], action) => {
    switch(action.type){
        case 'START_GET_VISITAS':
            return action;
        case 'COMPLETE_GET_VISITAS':
            return action;
        case 'ERROR_GET_VISITAS':
            return action;
        default:
            return state;
    }
}

export const getVisitaById = ( state = [], action) => {
    switch(action.type){
        case 'START_GET_VISITA_BY_ID':
            return action;
        case 'COMPLETE_GET_VISITA_BY_ID':
            return action;
        case 'ERROR_GET_VISITA_BY_ID':
            return action;
        default:
            return state;
    }
}
