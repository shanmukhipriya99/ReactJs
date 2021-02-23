import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
    result: []
}

const reducer = (state = initialState, action) => {
    if(actionTypes.INCREMENT){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(actionTypes.DECREMENT){
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if(actionTypes.ADD){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if(actionTypes.SUB){
        return {
            ...state,
            counter: state.counter - action.value
        }  
    }
    return state;
}

export default reducer;