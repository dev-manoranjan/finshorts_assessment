import {host, endpoints} from './end-points';

const get = () => {
  return fetch(host, {
    method: 'GET',
    headers: {'Content-type': 'application/json;charset=UTF-8'},
  })
    .then(response => response.json())
    .then(json => json)
    .catch(err => err);
};

const post = params => {
  return fetch(host, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {'Content-type': 'application/json; charset=UTF-8'},
  })
    .then(response => response.json())
    .then(json => json)
    .catch(err => {
      return err;
    });
};

export const request = {get, post};
