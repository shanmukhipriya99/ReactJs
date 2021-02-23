const initialState = {
    counter: 0,
    result: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'DECREMENT'){
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if(action.type === 'ADD'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if(action.type === 'SUB'){
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    if(action.type === 'STORE_RESULT'){
        return {
            ...state,
            result: state.result.concat({id: new Date(),value: state.counter})  //push() also does the same thing but mutates the original array
        }         // whereas concat() returns a new array (old array + changes made)
    }
    if(action.type === 'DELETE_RESULT'){
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