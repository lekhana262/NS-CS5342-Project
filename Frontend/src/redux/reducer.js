import * as types from "./actionTypes.js";

const initialState = {
  conversationList:[],
};

const DataReducers = (state = initialState, action) => {
  switch (action.type) {
    
      case types.CONVERSATION:
        return {
          ...state,
          conversationList:action?.payload
        }
      
    default:
      return state;
  }
};
export default DataReducers;
