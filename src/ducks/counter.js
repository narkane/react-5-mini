const initialState = {
  value: 0,
  lastInput: 0
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const increment = num => {
  return {
    type: INCREMENT,
    payload: num
  };
};

export const decrement = num => {
  return {
    type: DECREMENT,
    payload: num
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + action.payload, lastInput: action.payload };

    case DECREMENT:
      return {
        value: state.value - action.payload,
        lastInput: -action.payload
      };

    default:
      return state;
  }
}
