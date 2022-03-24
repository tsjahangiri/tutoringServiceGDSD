// @flow
import {
    FETCH_POLL_BY_ID,
    SET_POLL,
  
    SAVE_POLL,
    SAVE_POLL_LOADING,
    SAVE_POLL_SUCCESS,
    SAVE_POLL_FAILED,
  
    UPDATE_POLL,
    UPDATE_POLL_SUCCESS,
    UPDATE_POLL_FAILED,
  } from "../actionTypes/votingPoll";
  
  //GET
  export const fetchPollById = (id) => {
    
    return {
      type: FETCH_POLL_BY_ID,
      payload: {
        id,
      },
    };
  };
  
  export const setPoll = (payload) => {
    return {
      type: SET_POLL,
      payload,
    };
  };
  
  
  //SAVE
  export const savePoll = (payload) => {
    return {
      type: SAVE_POLL,
      payload
    };
  };
  
  export const savePollLoading = (payload) => ({
    type: SAVE_POLL_LOADING
  });
  
  export const savePollSuccess = (message: string, type: string = "success") => ({
    type: SAVE_POLL_SUCCESS,
     payload: {
      saveAlert: {
        message,
        type,
      },
    },
  });
  
  export const savePollFailed = (message: string, type: string = "danger") => ({
    type: SAVE_POLL_FAILED,
    payload: {
      saveAlert: {
        message,
        type,
      },
    },
  });
  
  //UPDATE
  export const updatePoll = (payload) => {
    return {
      type: UPDATE_POLL,
      payload
    };
  };
  
  export const updatePollSuccess = (message: string, type: string = "success") => ({
    type: UPDATE_POLL_SUCCESS,
     payload: {
      updateAlert: {
        message,
        type,
      },
    },
  });
  
  export const updatePollFailed = (message: string, type: string = "danger") => ({
    type: UPDATE_POLL_FAILED,
    payload: {
      updateAlert: {
        message,
        type,
      },
    },
  });
  
  