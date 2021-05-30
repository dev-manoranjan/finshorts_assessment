import {BASIC_DETAIL} from './types';

export const addBasicDetail = formData => {
  return {
    type: BASIC_DETAIL,
    data: formData,
  };
};
