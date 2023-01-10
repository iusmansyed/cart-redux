const initializedValue = 0;
const changeTheValue = (state = initializedValue, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return 0;
  }
};
export default changeTheValue;
