import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
    result: []
}

const reducer = (state = initialState, action) => {
    if(actionTypes.STORE_RESULT){
        return {
            ...state,
            result: state.result.concat({id: new Date(),value: action.result})  //push() also does the same thing but mutates the original array
        }         // whereas concat() returns a new array (old array + changes made)
    }
    if(actionTypes.DELETE_RESULT){
        // const id = 2;     //if it's an array of objects, then the objects also need to be changed immutably
        // const newArray = [...state.result];  //for immutable changes
        // newArray.splice(id, 1);
        const updatedArray = state.result.filter(result => result.id !== action.resultElId);
        return {
            ...state,
            result: updatedArray
        }         
    }
    return state;
}

export default reducer;