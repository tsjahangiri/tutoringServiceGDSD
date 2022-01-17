// @flow
import {
   SAVE_QUALIFICATION,
  SAVE_QUALIFICATION_LOADING,
  SAVE_QUALIFICATION_SUCCESS,
  SAVE_QUALIFICATION_FAILED,
} from "../actionTypes/qualification";

export const saveQualification = (data) => {
  console.log("from creators" + data);
  return {
    type: SAVE_QUALIFICATION,
    payload: data
  };
};

export const saveQualificationLoading = (data) => ({
  type: SAVE_QUALIFICATION_LOADING,
  data,
});

export const saveQualificationSuccess = (data) => ({
  type: SAVE_QUALIFICATION_SUCCESS,
  data,
});

export const saveQualificationFailed = () => ({
  type: SAVE_QUALIFICATION_FAILED,
});
