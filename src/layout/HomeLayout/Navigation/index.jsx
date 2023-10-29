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
import { Fab, Fade } from '@mui/material';

import Logo from './Logo';
import RequestButtons from './RequestButtons';
import MenuItems from './MenuItems';

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
    elevation: 0,
    className: trigger ? 'elevation-appbar' : ''
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
  return (
    <React.Fragment>
      <CssBaseline />
      <div id="back-to-top-anchor"></div>
      <ElevationScroll {...props} style={{ zIndex: 99999999 }}>
        <AppBar style={{ zIndex: 99999999 }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Logo sx={{ order: 0, flexGrow: 1, mr: 1 }} />
              <MenuItems />

              <Box sx={{ order: 3, flexGrow: 0, display: 'flex' }}>
                <RequestButtons />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <ScrollTop {...props}>
        <Fab size="large" aria-label="scroll back to top" variant="contained" color="info">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
