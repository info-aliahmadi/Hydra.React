// project import
import authentication from '../modules/auth/menu-items';
import fileStorage from '../modules/fileStorage/menu-items';
import cms from '../modules/cms/menu-items';
import crm from '../modules/crm/menu-items';
import dashboard from './dashboard';
import utilities from './utilities';
import support from './support';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, authentication, cms, crm, fileStorage]
};

export default menuItems;
