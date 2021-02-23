const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

//reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,    //use the spread operator to get all the elements from the initial state
      counter: state.counter + 1, //this updates the counter in the initial state
    };
  }
  if(action.type === "ADD_COUNTER"){
      return {
          ...state,
          counter: state.counter + action.value
      }
  }
  return state;
};

//store
const store = createStore(rootReducer);
console.log(store.getState());

//subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

//dispatching actions
store.dispatch({ type: "INC_COUNTER" });
// console.log(store.getState());
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());

