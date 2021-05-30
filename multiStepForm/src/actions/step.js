import {STEPS} from './types';

export const changeStep = data => {
  return {
    type: STEPS,
    data,
  };
};
