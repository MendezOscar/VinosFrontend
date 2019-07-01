export const getMateriaprima = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_MATERIAPRIMA':
            return action;
        case 'COMPLETE_GET_MATERIAPRIMA':
            return action;
        case 'ERROR_GET_MATERIAPRIMA':
            return action;
        default:
            return state;
    }
}

export const postMateriaprima = (state = [], action) => {
    switch (action.type) {
        case 'START_POST_MATERIAPRIMA':
            return action;
        case 'COMPLETE_POST_MATERIAPRIMA':
            return action;
        case 'ERROR_POST_MATERIAPRIMA':
            return action;
        default:
            return state;
    }
}