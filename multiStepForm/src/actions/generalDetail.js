import {GENERAL_DETAIL} from './types';

export const addGeneralDetail = formData => {
  return {
    type: GENERAL_DETAIL,
    data: formData,
  };
};
