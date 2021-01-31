import actions from './action-types';
import {combineReducers} from 'redux';
function quotes(state=[], action){
    switch(action.type){

        case actions.SET_QUOTES: {
            return action.payload; 
        }
        default: return state;

    }
}
function filter(state='',action){
    switch(action.type){
        case actions.SET_FILTER:{
            return action.payload;
        }
        default: return state;
    }
}
export default combineReducers({quotes,filter})
    