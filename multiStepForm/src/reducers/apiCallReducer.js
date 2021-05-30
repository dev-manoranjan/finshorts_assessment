import {LOADING} from '../actions/types';

const intialState = {loading: false};

const apiCallReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: action.data};
    default:
      return state;
  }
};

export default apiCallReducer;
