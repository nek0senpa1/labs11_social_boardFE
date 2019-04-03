import axios from 'axios';

import { handleError } from '../../helpers/index.js';

const backendURL = process.env.REACT_APP_BACKEND_URL;

/***************************************************************************************************
 ********************************************* Actions *******************************************
 **************************************************************************************************/
export const ADD_REPLY_LOADING = 'ADD_REPLY_LOADING';
export const ADD_REPLY_SUCCESS = 'ADD_REPLY_SUCCESS';
export const ADD_REPLY_FAILURE = 'ADD_REPLY_FAILURE';

export const HANDLE_DELETE_COMMENT_LOADING = 'HANDLE_DELETE_COMMENT_LOADING';
export const HANDLE_DELETE_COMMENT_SUCCESS = 'HANDLE_DELETE_COMMENT_SUCCESS';
export const HANDLE_DELETE_COMMENT_FAILURE = 'HANDLE_DELETE_COMMENT_FAILURE';
/***************************************************************************************************
 ********************************************** Actions ********************************************
 **************************************************************************************************/
// .then(() => historyPush('/'))
// .then(() => historyPush(`/discussion/${discussion_id}`))

//Add Reply
export const addReply = (post_id, team_id, replyBody) => dispatch => {
  const user_id = localStorage.getItem('symposium_user_id');
  const token = localStorage.getItem('symposium_token');
  const headers = { headers: { Authorization: token } };
  const body = { post_id, replyBody, team_id };
  dispatch({ type: ADD_REPLY_LOADING });
  return axios
    .post(`${backendURL}/replies/${user_id}`, body, headers)
    .then(res => dispatch({ type: ADD_REPLY_SUCCESS, payload: res.data }))
    .catch(err => handleError(err, ADD_REPLY_FAILURE)(dispatch));
};

export const updateReplyWithImage = (image_id, reply_id) => dispatch => {
  const user_id = localStorage.getItem('symposium_user_id');
  const token = localStorage.getItem('symposium_token');
  const headers = { headers: { Authorization: token } };
  const post_image = { image_id, reply_id };
  return axios
    .put(`${backendURL}/posts/images/${user_id}`, post_image, headers)
    .then(res => console.log(res.data))
    .catch(err => handleError(err)(dispatch));
};
