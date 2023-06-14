// ==============================|| THEME CONFIG  ||============================== //

const CONFIG = {
  DEFAULT_PATH: '/dashboard',
  FONT_FAMILY: `'Public Sans', sans-serif`,
  MINIDRAWER: true,
  CONTAINER: true,
  MODE: 'light',
  PRESET_COLOR: 'default',
  THEME_DIRECTION: 'ltr',
  API_BASEPATH: 'https://localhost:7134', // isDevelopment ? 'https://localhost:7134/': 'https://website.com', // application api basepath
  LOGIN_API_PATH: 'https://localhost:7134/Auth/Login',
  REFRESH_TOKEN_API_PATH: 'https://localhost:7134/Auth/RefreshToken',
  LOGOUT_API_PATH: 'https://localhost:7134/Auth/SignOut',
  FRONT_PATH: 'http://localhost:3000',
  DASHBOARD_PATH: 'http://localhost:3000/dashboard',
  LOGIN_PATH: 'http://localhost:3000/login',

  AUTHENTICATION_DEFAULT_STORAGE: 'localStorage', //'cookie',
  AUTHENTICATION_STORAGE_NAME: 'HydraAuthenticationStorage',
  AUTHORIZATION_STORAGE_NAME: 'HydraAuthorizationStorage',
  DEFAULT_LANGUAGE: 'fr'
};

export default CONFIG;

export const drawerWidth = 260;

export const drawerMinimizeWidth = 60;

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';
