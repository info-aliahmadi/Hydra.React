import axios from 'axios';
import AuthenticationService from 'modules/auth/services/Authentication/AuthenticationService';

export function setDefaultHeader(contentType) {
  var jwt = new AuthenticationService().getJwt();
  setAuthenticationHeader(jwt, contentType ? contentType : 'application/json');
}
export function setAuthenticationHeader(token, contentType) {
  let tokenBearer = token ? 'Bearer ' + token : '';
  axios.defaults.headers.common['Authorization'] = tokenBearer;
  axios.defaults.headers.common['accept'] = '*/*';
  axios.defaults.headers.post['Content-Type'] = contentType;
}
export function setTokenBearer() {
  var jwt = new AuthenticationService().getJwt();
  return 'Bearer ' + jwt;
}
