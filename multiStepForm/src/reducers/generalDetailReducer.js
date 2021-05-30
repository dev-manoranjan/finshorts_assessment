import {GENERAL_DETAIL} from '../actions/types';

const intialState = {weight: '', gender: ''};

const generalDetailReducer = (state = intialState, action) => {
  switch (action.type) {
    case GENERAL_DETAIL:
      return {...state, weight: action.data.weight, gender: action.data.gender};
    default:
      return state;
  }
};

export default generalDetailReducer;
