import axios from 'axios';
import history from "../../components/history";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "../types/types";

const url_api = process.env.REACT_APP_API_URL;

export const createStream = values => (dispatch,getState) =>{
  const {userId} = getState().auth;

  axios.post(`${url_api}/streams`,{...values,userId})
    .then(r => {
      dispatch({
        type: CREATE_STREAM,
        payload: values,
      });
      history.push('/');

    })
    .catch(e => {
      console.log(url_api);
      console.log(e);
    })
};

export const fetchStreams = () => async dispatch => {
  const response = await axios.get(`${url_api}/streams`);
  dispatch({
    type:FETCH_STREAMS,
    payload: response.data,
  })
};


export const fetchStream = id => async dispatch => {
  const response = await axios.get(`${url_api}/streams/${id}`);

  dispatch({
    type:FETCH_STREAM,
    payload: response.data,
  })
};


export const editStream = (id,values) => async dispatch => {
  const response = await axios.put(`${url_api}/streams/${id}`,values);

  dispatch({
    type:EDIT_STREAM,
    payload: response.data,
  })
};

export const deleteStream = id => async dispatch => {
  const response = await axios.delete(`${url_api}/streams/${id}`);

  dispatch({
    type:DELETE_STREAM,
    payload: response.data,
  })
};
