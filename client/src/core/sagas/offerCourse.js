// @flow
import { takeEvery, call, put } from "redux-saga/effects";
import { executeApiCall } from "./api";
import type { Saga } from "redux-saga";
import { SAVE_OFFER_COURSE } from "../actionTypes/offerCourse";
import {
  saveOfferCourseSuccess,
  saveOfferCourseFailed
} from "../actionCreators/offerCourse";

export default function* offerCourseSaga(): Saga<void> {
  yield takeEvery(SAVE_OFFER_COURSE, saveOfferCourse);
}

export function* saveOfferCourse(action: Object): Saga<void> {
  // const { course } = action.payload;

 
  var url = process.env.REACT_APP_API_URL;
  url += `/tutor/course`;

  const apiOptions: ApiOptions = {
    url,
    method: "POST",
    params: action.payload,
    useJwtSecret: false
  };

  const apiResponse: ApiResponse = yield call(executeApiCall, apiOptions);

  const { success } = apiResponse;
  var msg = "";
  if (success) {
    msg = "Course Saved Successfully";
    yield put(saveOfferCourseSuccess({ msg }));
  } else {
    msg = "Failed to save data"; //FIXME Improve error message
    yield put(saveOfferCourseFailed({ msg }));
  }
}
