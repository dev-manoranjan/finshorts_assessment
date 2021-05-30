import {BASIC_DETAIL} from '../actions/types';

const intialState = {name: '', age: ''};

const basicDetailReducer = (state = intialState, action) => {
  switch (action.type) {
    case BASIC_DETAIL:
      return {...state, name: action.data.name, age: action.data.age};
    default:
      return state;
  }
};

export default basicDetailReducer;
