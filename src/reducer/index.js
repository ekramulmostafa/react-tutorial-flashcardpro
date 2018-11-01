import {SET_STACK} from '../action'

function stack(state = {}, action){
    switch(action.type){
        case SET_STACK:
            return action.stack;
        default:
            return state;
    }
    return {}
}

export default stack