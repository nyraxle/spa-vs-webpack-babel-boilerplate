'use strict';

const KEY = 'WebToken';

const getToken = () => {
  // return sessionStorage.getItem(KEY);
  return 'eyJJc0F1dGhlbnRpY2F0ZWQiOnRydWUsIk5hbWUiOiJBbGJlcnRvIiwiQXV0aGVudGljYXRpb25UeXBlIjoiQmFzaWMifQ==';
};

const setToken = (token) => {
  sessionStorage.setItem(KEY, token);
};

export default {
  get: getToken,
  set: setToken
};
