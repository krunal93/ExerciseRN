import {SET_API_RESPONSE, SET_RANDOM_INDEX} from './actionConstants';

const initialResponse = {
  images: [],
  first: 0,
  second: 0,
};
const imagesReduces = (state = initialResponse, action) => {
  switch (action.type) {
    case SET_API_RESPONSE:
      return {...state, images: action.payload.data};
    case SET_RANDOM_INDEX:
      const {first, second} = action.payload;
      return {...state, first, second};
    default:
      return state;
  }
};

export default imagesReduces;
