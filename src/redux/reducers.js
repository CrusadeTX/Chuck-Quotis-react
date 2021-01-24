import actions from './action-types';
import {combineReducers} from 'redux';
function quotes(state=[], action){
    switch(action.type){

        case actions.SET_QUOTES: {
            return action.payload;
        }

    }
}
function filter(state='',action){
    switch(action.type){
        case actions.SET_FILTER:{
            return action.payload;
        }
    }
}
export default combineReducers({quotes,filter,fname,lname})
    