import { ADD_DATA, CHANGE_PINCODE, SELECTED_WIDGET } from "./actions";

const initialState = {
  data: undefined,
  pinCode: undefined,
  selectedWidget: undefined,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case CHANGE_PINCODE:
      return {
        ...state,
        pinCode: action.payload,
      };
    case SELECTED_WIDGET:
      return {
        ...state,
        selectedWidget: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
