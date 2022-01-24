/* eslint-disable no-duplicate-case */
// @flow
import { UPLOAD_FILE } from "../actionTypes/fileUpload";

export const INITIAL_STATE = {
  data: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPLOAD_FILE:
      return {
        ...state,
      };

    default:
      return state;
  }
};
