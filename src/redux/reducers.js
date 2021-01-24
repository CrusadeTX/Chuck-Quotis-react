import actions from './action-types';
import {combineReducers} from 'redux';
function quotes(state=[], action){
    switch(action.type){

        case actions.SET_QUOTES: {
            return action.payload;
        }

    }
}
    