import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import Menu from './Menu';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Fab, Fade, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeService from 'modules/home/services/HomeService';
import Logo from './Logo';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center'
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default function Navigation(props) {
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
    <React.Fragment>
      <CssBaseline />
      <div id="back-to-top-anchor"></div>
      <ElevationScroll {...props} style={{ zIndex: 99999999 }}>
        <AppBar style={{ zIndex: 99999999 }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Logo sx={{ order: 0, flexGrow: 1, mr: 1 }} />

              <Box sx={{ order: 1, flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
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
                      <Typography textAlign="center" href={item.url}>
                        {item.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ order: 1, flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: 'center', textAlign: 'center' } }}>
                {menuItems.map((item) => (
                  <Button variant="text" key={item.id} href={item.url} sx={{ m: 2, display: 'block' }}>
                    {item.title}
                  </Button>
                ))}
              </Box>

              <Box sx={{ order: 3, flexGrow: 0, display: 'flex' }}>
                <Button variant="outlined" color="primary" size="large">
                  Consult
                </Button>
                <Button variant="contained" color="primary" size="large">
                  Request
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
