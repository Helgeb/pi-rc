import { RootState } from "../store";

export const getPiUri = (state: RootState) => state.config.piUri;
