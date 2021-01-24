import actions from './action-types';
export function setQuotes(quotes){
    return {type: actions.SET_QUOTES, payload: quotes};
}
export function setFilter(filter){
    return {type: actions.SET_FILTER, payload: filter};
}