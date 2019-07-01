import http from './http'

const startGetEmpleados = () => { return { type: 'START_GET_EMPLEADOS', ready: false } }
const completeGetEmpleados = (data) => { return { type: 'COMPLETE_GET_EMPLEADOS', data } }
const errorGetEmpleados = (err) => { return { type: 'ERROR_GET_EMPLEADOS', err } }

const startPostEmpleado = () => { return { type: 'START_POST_EMPLEADO', ready: false } }
const completePostEmpleado = (data) => { return { type: 'COMPLETE_POST_EMPLEADO', data } }
const errorPostEmpleado = (err) => { return { type: 'ERROR_POST_EMPLEADO', err } }

export const getEmpleados = () => {
    return (dispatch) => {
        dispatch(startGetEmpleados());
        http.get('/api/empleado').then((response) => {
            if (response.data) {
                dispatch(completeGetEmpleados(response.data));
            }
        })
            .catch((err) => {
                console.log(err);
                dispatch(errorGetEmpleados(err));
            })
    }
}

export const postEmpleado = (Empleado) => {
    return (dispatch) => {
        dispatch(startPostEmpleado());
        http.post('/api/empleado',
            {
                idactividad: Empleado.Idempleado,
                nombre: Empleado.Nombre,
                apellido: Empleado.Apellido,
                edad: Empleado.Edad,
                fechanacimiento: Empleado.Fechanacimiento,
                cargo:  Empleado.Cargo
            }).then((response) => {
                if (response.data) {
                    dispatch(completePostEmpleado(response.data));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(errorPostEmpleado(err));
            })
    }
}
