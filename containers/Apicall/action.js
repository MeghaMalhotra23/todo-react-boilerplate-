import {REQUEST_API_DATA,RECIEVE_API_DATA} from './constants';
export const requestApiData=()=>{
    console.log('In action');
    return ({type:REQUEST_API_DATA})}
export const recieveApiData=(data)=>({type:RECIEVE_API_DATA,data});