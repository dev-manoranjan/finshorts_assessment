import {STEPS} from '../actions/types';

const intialState = {currentStepVal: 1};

const stepReducer = (state = intialState, action) => {
  switch (action.type) {
    case STEPS:
      return {...state, currentStepVal: action.data};
    default:
      return state;
  }
};

export default stepReducer;
