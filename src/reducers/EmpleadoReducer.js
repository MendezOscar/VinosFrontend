export const getEmpleados = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_EMPLEADOS':
            return action;
        case 'COMPLETE_GET_EMPLEADOS':
            return action;
        case 'ERROR_GET_EMPLEADOS':
            return action;
        default:
            return state;
    }
}

export const postEmpleado = (state = [], action) => {
    switch (action.type) {
        case 'START_POST_EMPLEADO':
            return action;
        case 'COMPLETE_POST_EMPLEADO':
            return action;
        case 'ERROR_POST_EMPLEADO':
            return action;
        default:
            return state;
    }
}