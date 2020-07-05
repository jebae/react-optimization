const initialState = {
  counters: []
};

// actions
const ADD_COUNTER = "ADD_COUNTER";
const SET_COUNTERS = "SET_COUNTERS";

// action creators
export const addCounter = (color) => ({
  type: ADD_COUNTER,
  payload: color
});

export const setCounters = (counters) => ({
  type: SET_COUNTERS,
  payload: counters
});

// reducer
export const counterReducer = (state=initialState, action) => {
  switch (action.type) {
  case ADD_COUNTER:
    return {
      ...state,
      counters: [ ...state.counters, { color: action.payload } ]
    };
  case SET_COUNTERS:
    return {
      ...state,
      counters: [ ...action.payload ]
    };
  default:
    return state;
  }
};