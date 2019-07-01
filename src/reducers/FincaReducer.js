export const getFincas = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_FINCAS':
            return action;
        case 'COMPLETE_GET_FINCAS':
            return action;
        case 'ERROR_GET_FINCAS':
            return action;
        default:
            return state;
    }
}

export const postFinca = (state = [], action) => {
    switch (action.type) {
        case 'START_POST_FINCA':
            return action;
        case 'COMPLETE_POST_FINCA':
            return action;
        case 'ERROR_POST_FINCA':
            return action;
        default:
            return state;
    }
}