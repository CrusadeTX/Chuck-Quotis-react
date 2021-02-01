import actions from './action-types';
import networkClient from '../network/network-client';
//import axios from 'axios'
export function setQuotes(quotes){
    return {type: actions.SET_QUOTES, payload: quotes};
}
export function setFilter(filter){
    return {type: actions.SET_FILTER, payload: filter};
}
export function setLayout(layout){
    return {type: actions.SET_LAYOUT, payload: layout};
}
export const getQuotes = params => async dispatch => {
    try {
        const response = await networkClient.get('jokes',params,)
        dispatch(setQuotes(response.value));
        console.log(response.value)
    } catch (error) {
        console.log(error)
    }
}
/*export const getQuotes = params => async dispatch => {
    try {
        const response = await axios.get('https://api.icndb.com/jokes/')
        dispatch(setQuotes(response.value));
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}*/