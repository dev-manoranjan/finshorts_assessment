export const commonUtils = {
  isValidResponse: response => {
    if (response.status && response.status === 'success') {
      return true;
    }
    return false;
  },
};
