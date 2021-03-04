import { createAction } from "@reduxjs/toolkit";

export const setPiUriSuccess = createAction(
  "CONFIG/SET_PI_URI_SUCCESS",
  (piUri: string) => ({
    payload: { piUri },
  })
);
