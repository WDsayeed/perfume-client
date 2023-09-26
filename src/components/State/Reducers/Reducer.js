import { FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS } from "../actionTypes/actionTypes";

export const initialState = {
  loading: false,
  cartData: [],
  error: false,
//   totalAmount: 0,
//   totalItem: 0,
};

export const productReducer = (state, action) => {
 
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        loading: true,
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        loading:false,
        cartData: action.payload,
        
      };
    case FETCHING_ERROR:
      return {
        ...state,
        loading:false,
        error:true,
      };
    default:
      return state;
  }
};
