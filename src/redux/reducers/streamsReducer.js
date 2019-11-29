import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../types/types";
import lodash from 'lodash'

const initialState = {
  streams: [],
  stream: {},
};

const streamsReducer = (state = initialState, action) => {
  switch (action.type) {

    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload};

/*
    case FETCH_STREAM:
      return {...state, [action.payload.id]: action.payload};
*/

    case FETCH_STREAM:
      return {...state, stream: action.payload};

    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload};

    case FETCH_STREAMS:
      return {...state, streams: [...action.payload]};

    case DELETE_STREAM:
      return lodash.omit(state, action.payload.id);

    default:
      return state;
  }
};

export default streamsReducer;
