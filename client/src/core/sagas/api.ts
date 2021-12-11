import {
  call,
  race,
  delay,
} from 'redux-saga/effects';
import axios from 'axios';

const DEFAULT_TIMEOUT = 1000000;

const DEFAULT_HEADERS: BaseHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: undefined,
};

export interface BaseHeaders {
  'Content-Type': string;
  Accept: string;
  Authorization: undefined | string;
}

export type ApiOptions = {
  url: string,
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH',
  params?: Object,
  headers?: BaseHeaders,
  handleErrors?: boolean,
  timeout?: number,
  responseType?: string,
};

export type ApiResponse = {
  success: boolean,
  statusCode?: number,
  response?: any,
  responseHeaders?: Object,
  errorCode?: string,
  errorObj?: Object,
  apiOptions: ApiOptions,
  errorHandled?: boolean,
};

export const DEFAULT_API_OPTIONS: ApiOptions = {
  url: '',
  method: 'POST',
  headers: DEFAULT_HEADERS,
  handleErrors: false,
  timeout: DEFAULT_TIMEOUT,
};

export function* callApi(options: ApiOptions): Generator<any, ApiResponse, any> {
  const mergedHeaders = { ...DEFAULT_HEADERS, ...options.headers };
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
    headers: mergedHeaders,
    params: options.params,
  };

  const {
    url,
    method,
    params,
    headers,
    handleErrors,
    timeout,
    responseType,
  } = mergedOptions;

  let apiResponse: ApiResponse = {
    success: false,
    errorCode: 'UNKNOWN_ERROR',
    apiOptions: mergedOptions,
  };
  
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

  let axiosOpts: any = {
    url,
    method,
    timeout,
    cancelToken: source.token,
    headers,
  };
  
  if (method === 'GET') {
    axiosOpts.params = params;
  } else if (axiosOpts.headers['Content-Type'] !== 'application/json') {
    axiosOpts.data = params;
  } else {
    axiosOpts.data = JSON.stringify(params);
  }

  if (responseType) {
    axiosOpts.responseType = responseType;
  }

  let alertMessage = null;
  
  try {
    const { httpResponse, raceTimeout } = yield call(makeActualCall, axiosOpts);
    if (raceTimeout) {
      const msg = 'Timeout';
      source.cancel(msg);
      alertMessage = msg;
      apiResponse = {
        success: false,
        errorCode: 'REQUEST_TIMEOUT',
        errorObj: raceTimeout,
        apiOptions: mergedOptions,
        response: {
          Message: msg,
        },
      };
    } else {
      alertMessage = null;
      apiResponse = {
        success: true,
        statusCode: httpResponse.status,
        response: httpResponse.data,
        responseHeaders: httpResponse.headers,
        apiOptions: mergedOptions,
      };
    }
  } catch (error: any) {
    console.log(error); //FIXME: Add logic to handle error
  }

  return apiResponse;
}

export function* makeActualCall(axiosOpts: any): Generator<any, Object, any> {
  return yield race({
    httpResponse: call(axios as any, axiosOpts),
    raceTimeout: delay(axiosOpts.timeout),
  });
}