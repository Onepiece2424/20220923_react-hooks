import { createState } from "redux";

const initialState = {
  count: 1,
};

const reducer = (state = initialState) => {
  return state;
};

const store = createState(reducer);

export default store;
