const initialState = {
  text: "",
  checked: false
};

// actions
const SET_INPUT = "SET_INPUT";
const TOGGLE_CHECKBOX = "TOGGLE_CHECKBOX";

// action creators
export const setInput = (text) => ({
  type: SET_INPUT,
  payload: text
});

export const toggleCheckbox = () => ({
  type: TOGGLE_CHECKBOX,
});

// reducer
export const inputReducer = (state=initialState, action) => {
  switch (action.type) {
  case SET_INPUT:
    return {
      ...state,
      text: action.payload
    };
  case TOGGLE_CHECKBOX:
    return {
      ...state,
      checked: state.checked ? false : true
    };
  default:
    return state;
  }
};