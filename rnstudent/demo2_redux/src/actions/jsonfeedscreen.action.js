import {
  JSON_FEED_FAILED,
  JSON_FEED_FETCHING,
  JSON_FEED_SUCCESS,
} from '../constants';


// Used by Reducers
export const setStateToFetching = () => ({
  type: JSON_FEED_FETCHING,
});

export const setStateToSuccess = (payload) => ({
  type: JSON_FEED_SUCCESS,
  payload,
});

export const setStateToFailed = () => ({
  type: JSON_FEED_FAILED,
});


