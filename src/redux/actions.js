import {SET_API_RESPONSE, SET_RANDOM_INDEX} from './actionConstants';

export const setApisResponse = (data) => ({
  type: SET_API_RESPONSE,
  payload: {
    data,
  },
});

export const setRandomIndex = (data) => ({
  type: SET_RANDOM_INDEX,
  payload: {
    first: data.first,
    second: data.second,
  },
});
