import { call, race, delay, select, put } from "redux-saga/effects";
import axios from "axios";
import moment from "moment";
import { getJwtSecret } from "../selectors/user";
import { logoutUser, setLoginAlert } from "../actionCreators/user";
import isOnline from "is-online";

const DEFAULT_TIMEOUT = 1000000;

const DEFAULT_HEADERS: BaseHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: undefined,
};

export interface BaseHeaders {
  "Content-Type": string;
  Accept: string;
  Authorization: undefined | string;
}

export type ApiOptions = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH";
  params?: Object;
  headers?: BaseHeaders;
  handleErrors?: boolean;
  timeout?: number;
  useJwtSecret?: boolean;
};

export type ApiResponse = {
  isSuccessful: boolean;
  statusCode?: number;
  response?: any;
  responseHeaders?: Object;
  errorCode?: string;
  apiOptions: ApiOptions;
};

export const DEFAULT_API_OPTIONS: ApiOptions = {
  url: "",
  method: "POST",
  headers: DEFAULT_HEADERS,
  timeout: DEFAULT_TIMEOUT,
  useJwtSecret: false,
};

export function* executeApiCall(
  options: ApiOptions
): Generator<any, ApiResponse, any> {
  const requestHeaders = { ...DEFAULT_HEADERS, ...options.headers };

  const apiOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
    headers: requestHeaders,
    params: options.params,
  };

  const { url, method, params, headers, timeout, useJwtSecret } = apiOptions;

  let apiResponse: ApiResponse = {
    isSuccessful: false,
    errorCode: "UNKNOWN_ERROR",
    apiOptions: apiOptions,
  };

  const isConnected = yield call(isOnline);
  if (!isConnected) {
    apiResponse = {
      isSuccessful: false,
      errorCode: "NETWORK_UNAVAILABLE",
      apiOptions: apiOptions,
      response: {
        ErrorMessage:
          "I'm not connected to a network. Check your internet connection and try again.",
      },
    };
    return apiResponse;
  }

  if (useJwtSecret) {
    const jwtSecret = yield call(retrieveJwtSecret);
    if (jwtSecret) {
      headers.Authorization = "Bearer ".concat(jwtSecret);
    } else {
      apiResponse = {
        isSuccessful: false,
        errorCode: "AUTHENTICATION_ERROR",
        apiOptions: apiOptions,
        response: {
          ErrorMessage:
            "Something went wrong and I had to sign you out.  Please sign in again.",
        },
      };

      yield put(
        setLoginAlert(
          "Something went wrong and I had to sign you out.  Please sign in again."
        )
      );
      yield put(logoutUser());

      return apiResponse;
    }
  }

  const requestCancellation = axios.CancelToken.source();

  let axiosOpts: any = {
    url,
    method,
    timeout,
    cancelToken: requestCancellation.token,
    headers,
  };

  if (method === "GET") {
    axiosOpts.params = params;
  } else if (axiosOpts.headers["Content-Type"] !== "application/json") {
    axiosOpts.data = params;
  } else {
    axiosOpts.data = JSON.stringify(params);
  }

  try {
    const { response, timeout } = yield call(executeActualApiCall, axiosOpts);
    if (timeout) {
      const timeoutError =
        "I didn't get a response from the server on time. Please try again.";

      requestCancellation.cancel(timeoutError);

      apiResponse = {
        isSuccessful: false,
        errorCode: "REQUEST_TIMEOUT",
        apiOptions: apiOptions,
        response: {
          ErrorMessage: timeoutError,
        },
      };
    } else {
      apiResponse = {
        isSuccessful: true,
        statusCode: response.status,
        response: response.data,
        responseHeaders: response.headers,
        apiOptions: apiOptions,
      };
    }
  } catch (error: any) {
    if (error.response) {
      const { status, data, headers: responseHeaders } = error.response;
      if (status === 401) {
        apiResponse = {
          isSuccessful: false,
          statusCode: status,
          response: data,
          responseHeaders,
          errorCode: "AUTHENTICATION_ERROR",
          apiOptions: apiOptions,
        };
      } else {
        const { ErrorCode: errorCode } = data || {};
        apiResponse = {
          isSuccessful: false,
          statusCode: status,
          // response: data, //FIXME: Remove
          responseHeaders,
          errorCode: errorCode || "HTTP_ERROR_CODE",
          apiOptions: apiOptions,
          response: {
            ErrorMessage:
              "Something went wrong. You're connected to a network but I can't do anything.",
          },
        };
        // FIXME: Check is server reachable
      }
    } else if (error.request) {
      apiResponse = {
        isSuccessful: false,
        errorCode: "NO_RESPONSE_FROM_SERVER",
        apiOptions: apiOptions,
        response: {
          ErrorMessage:
            "Something went wrong. You're connected to a network but I can't do anything.",
        },
      };
    } else {
      apiResponse = {
        isSuccessful: false,
        errorCode: "EXCEPTION",
        apiOptions: apiOptions,
        response: {
          ErrorMessage:
            "Well, this is embarrassing. Something went wrong and I don't know why!",
        },
      };
    }
  }

  return apiResponse;
}

export function* executeActualApiCall(
  axiosOpts: any
): Generator<any, Object, any> {
  return yield race({
    response: call(axios as any, axiosOpts),
    timeout: delay(axiosOpts.timeout),
  });
}

export function* retrieveJwtSecret(): Generator<any, any, any> {
  const { Secret, Expiry } = yield select(getJwtSecret);
  // if (Secret) {
  //   const now = yield call(Date.now);
  //   const expiry = moment(Expiry).valueOf();
  //   if (expiry >= now) {
  //     return Secret;
  //   }
  // }

  return Secret;
}
