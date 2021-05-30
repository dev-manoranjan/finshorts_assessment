import {LOADING} from './types';
import {request} from '../utils/api-utils';
export const apiCall = params => {
  return dispatch => {
    dispatch(isLoading(true));
    return request.post(params).then(data => {
      dispatch(isLoading(false));
      return data;
    });
  };
};

export const isLoading = status => {
  return {
    type: LOADING,
    data: status,
  };
};
