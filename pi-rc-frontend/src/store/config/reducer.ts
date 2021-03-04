import { createReducer } from "@reduxjs/toolkit";
import { setPiUriSuccess } from "./action";

const defaultState: { piUri: string } = {
  piUri: "",
};

const reducer = createReducer(defaultState, {
  [setPiUriSuccess.type]: (state, { payload }) => {
    const { piUri } = payload;
    return {
      ...state,
      piUri,
    };
  },
});

export default reducer;
