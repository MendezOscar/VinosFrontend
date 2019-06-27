import http from './http'

const startGetActividades = () => { return { type: 'START_GET_ACTIVIDADES', ready: false }}
const completeGetActividades = (data) => { return { type: 'COMPLETE_GET_ACTIVIDADES', data }}
const errorGetActividades = (err) => { return { type: 'ERROR_GET_ACTIVIDADES', err }}

const startPostActividades = () => { return { type: 'START_POST_ACTIVIDAD', ready: false }}
const completePostActividades = (data) => { return { type: 'COMPLETE_POST_ACTIVIDAD', data }}
const errorPostActividades = (err) => { return { type: 'ERROR_POST_ACTIVIDAD', err }}

export const getActividades = () => {
    return ( dispatch ) => {
        dispatch(startGetActividades());
        http.get('/api/actividades').then((response)=>{
            if(response.data){
                dispatch(completeGetActividades(response.data));
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch(errorGetActividades(err));
        })
    }
}

export const postActividad = (Actividad) => {
    return ( dispatch ) => {
        dispatch(startPostActividades());
        http.post('/api/Actividades', 
        {idactividad : Actividad.codigo,
            descripcion: Actividad.descripcion,
            numerodevisita: Actividad.numero
        }).then((response)=>{
            if(response.data){
                console.log('hola');
                console.log(response.data);
                dispatch(completePostActividades(response.data));
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch(errorPostActividades(err));
        })
    }
}
