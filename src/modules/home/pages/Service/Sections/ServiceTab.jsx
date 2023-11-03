import 'react';
import PropTypes from 'prop-types';
import { Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveAboutImage from 'assets/images/wave-about-3.svg';

import StatisticsImage from 'assets/images/statistics2.png';
import { useState } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

export default function ServiceTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="bg-white">
      <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveAboutImage})`
        }}
        height={{ xs: 250, sm: 280, md: 300, lg: 330, xl: 350 }}
      ></Box>
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          pt={{ xs: 3, sm: 5, md: 6, lg: 0, xl: 0 }}
          pb={{ xs: 10, sm: 10, md: 10, lg: 10, xl: 10 }}
        >
          <Grid
            item
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            pl={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
            pr={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
          >
            <Stack alignItems="center" textAlign={'center'} pt={15} pb={15}>
              <Typography variant="h5" pt={2}>
                Tagline
              </Typography>
              <Typography variant="h1" pt={2}>
                Medium length section heading goes here
              </Typography>
              <Typography variant="body2" pt={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,
                mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} xl={12} lg={12} md={12} sm={12}>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              <Tabs
                indicatorColor="primary"
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 6, borderColor: '#6cb6fe', borderRadius: '4px' }}
              >
                <Tab label="Portfolio" {...a11yProps(0)} />
                <Tab label="E-Commerce" {...a11yProps(1)} />
                <Tab label="Web Application" {...a11yProps(2)} />
              </Tabs>
              <Box pt={5} pl={5} pb={4}>
                <TabPanel value={value} index={0}>
                  <Typography variant="h2">Lorem ipsum dolor sit amet</Typography>
                  <Typography variant="body1" pt={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                    ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                    nulla, ut commodo diam libero vitae erat.
                    <Box textAlign="center">
                      <img src={StatisticsImage} alt="" width={'50%'} />
                    </Box>
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Typography variant="h2">Item Two Lorem ipsum dolor sit amet</Typography>
                  <Typography variant="body1" pt={4}>
                    Item Two dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,
                    mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,
                    eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                    commodo diam libero vitae erat.
                    <Box textAlign="center">
                      <img src={StatisticsImage} alt="" width={'50%'} />
                    </Box>
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Typography variant="h2"> Item Three Lorem ipsum dolor sit amet</Typography>
                  <Typography variant="body1" pt={4}>
                    Item Three dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                    ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                    nulla, ut commodo diam libero vitae erat.
                    <Box textAlign="center">
                      <img src={StatisticsImage} alt="" width={'50%'} />
                    </Box>
                  </Typography>
                </TabPanel>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
