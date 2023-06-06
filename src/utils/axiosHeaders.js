import axios from 'axios';

export function setAuthenticationHeader(token) {
  let tokenBearer = token ? 'Bearer ' + token : '';
  axios.defaults.headers.common['Authorization'] = tokenBearer;
  axios.defaults.headers.common['accept'] = '*/*';
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}
