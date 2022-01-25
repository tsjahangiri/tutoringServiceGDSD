import { takeEvery, call, put } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import { BaseHeaders, executeApiCall } from "./api";
import { tutorsApi } from "../endpoints";
import { UPLOAD_PROFILE_PICTURE } from "../actionTypes/profilePicture";

export default function* profilePictureSaga(): Saga<void> {
  yield takeEvery(UPLOAD_PROFILE_PICTURE, uploadProfilePicture);
}

export function* uploadProfilePicture(action: Object): Saga<void> {
  const headers: BaseHeaders = {
    "Content-Type": "multipart/form-data",
  };

  const formData = new FormData();
  formData.append("file", action.payload.profilePicture);
  formData.append("UserId", action.payload.UserId);
  formData.append("About", action.payload.About);
  formData.append("Age", action.payload.Age);

  const apiOptions: ApiOptions = {
    url: tutorsApi,
    method: "POST",
    params: formData,
    headers: headers,
    useJwtSecret: false,
  };

  console.log(apiOptions.params);
  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { isSuccessful, response = {} } = apiResponse;

  console.log(response);
}
