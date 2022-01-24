// @flow
import { takeEvery, call } from "redux-saga/effects";
import { executeApiCall } from "./api";
import type { Saga } from "redux-saga";
import { UPLOAD_FILE } from "../actionTypes/fileUpload";

import { fileUploadApi } from "../endpoints";

export default function* fileUploadSaga(): Saga<void> {
  yield takeEvery(UPLOAD_FILE, uploadFile);
}

export function* uploadFile(action: Object): Saga<void> {
  const headers: BaseHeaders = {
    "Content-Type": "multipart/form-data",
  };

  const formData = new FormData();
  formData.append("file", action.payload.file);

  console.log("from file upload saga", action.payload.file);
  const apiOptions: ApiOptions = {
    url: fileUploadApi,
    method: "POST",
    params: formData,
    headers: headers,
    useJwtSecret: false,
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { isSuccessful } = apiResponse;
  var msg = "";
  if (isSuccessful) {
    msg = "Course Saved Successfully";
    // yield put(saveCourseSuccess({ msg }));
  } else {
    msg = "Failed to save data"; //FIXME Improve error message
    // yield put(saveCourseFailed({ msg }));
  }
}

