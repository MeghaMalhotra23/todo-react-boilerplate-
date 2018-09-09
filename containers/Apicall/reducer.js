import {RECIEVE_API_DATA, REQUEST_API_DATA} from './constants';
import {fromJS} from 'immutable';

export const initialState=fromJS({
   
});

function apiReducer(state=initialState,{type,data}){
    switch(type){
    case RECIEVE_API_DATA:{
        return state.set('data',data);}
    case REQUEST_API_DATA:{
        console.log("hi");
        return state.set('data','requestes');
    }
    default:
    return state;
}
}
export default apiReducer;