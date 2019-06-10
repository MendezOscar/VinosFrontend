import http from './http'

const startGetVisitas = () => { return { type: 'START_GET_VISITAS', ready: false }}
const completeGetVisitas = (data) => { return { type: 'COMPLETE_GET_VISITAS', data }}
const errorGetVisitas = (err) => { return { type: 'ERROR_GET_VISITAS', err }}

const startGetVisitaById = () => { return { type: 'START_GET_VISITA_BY_ID', ready: false }}
const completeGetVisitaById = (data) => { return { type: 'COMPLETE_GET_VISITA_BY_ID', data }}
const errorGetVisitaById = (err) => { return { type: 'ERROR_GET_VISTA_BY_ID', err }}

export const getVisitas = () => {
    return ( dispatch ) => {
        dispatch(startGetVisitas());
        http.get('/api/visita').then((response)=>{
            if(response.data){
                dispatch(completeGetVisitas(response.data));
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch(errorGetVisitas(err));
        })
    }
}

export const getVisitaById = ( visitaId ) => {
    return ( dispatch ) => {
        dispatch(startGetVisitaById());
        http.get('/api/Visita/' + visitaId ).then((response)=>{
            if(response.data){
                dispatch(completeGetVisitaById(response.data));
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch(errorGetVisitaById(err));
        })
    }
}