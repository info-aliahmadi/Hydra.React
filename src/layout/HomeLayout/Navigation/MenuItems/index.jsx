import 'react';
import { Box, Button, IconButton, Link, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import HomeService from 'modules/home/services/HomeService';

export default function MenuItems() {
  let homeService = new HomeService();
  const [menuItems, setMenuItems] = useState([]);
  const loadMenu = () => {
    homeService.getMenu().then((result) => {
      setMenuItems(result);
    });
  };
  useEffect(() => {
    loadMenu();
  }, []);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <Box sx={{ order: 1, flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
        <Button
          variant="contained"
          color="info"
          size="large"
          aria-label="Menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' }
          }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.id} onClick={handleCloseNavMenu}>
              <Link variant="text" key={item.id} href={item.url} sx={{ m: 2, display: 'block' }}>
                {item.title}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box
        className="navigation-menu"
        sx={{ order: 1, flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: 'center', textAlign: 'center' } }}
      >
        {menuItems.map((item) => (
          <Link variant="text" key={item.id} href={item.url} sx={{ m: 2, display: 'block' }}>
            {item.title}
          </Link>
        ))}
      </Box>
    </>
  );
}
