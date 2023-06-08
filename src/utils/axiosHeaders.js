import axios from 'axios';
import AuthenticationService from 'modules/auth/services/Authentication/AuthenticationService';

export function setAuthenticationHeader(token) {
  let tokenBearer = token ? 'Bearer ' + token : '';
  axios.defaults.headers.common['Authorization'] = tokenBearer;
  axios.defaults.headers.common['accept'] = '*/*';
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}
export function setDefaultHeader() {
  var jwt = new AuthenticationService().getJwt();
  let tokenBearer = jwt ? 'Bearer ' + jwt : '';
  axios.defaults.headers.common['Authorization'] = tokenBearer;
  axios.defaults.headers.common['accept'] = '*/*';
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}
