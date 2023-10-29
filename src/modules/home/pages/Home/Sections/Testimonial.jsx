import { Avatar, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WebflowLogo from 'assets/images/webflow-logo.svg';

import WaveTestimonialImage from 'assets/images/wave-testimonial.svg';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import Carousel from 'react-material-ui-carousel';

import 'react';

export default function Testimonial() {
  const steps = [
    {
      name: 'Select campaign settings',
      company: 'X Company',
      description: `Our experience with OnWave Design was exceptional. 
                    They delivered a stunning website that perfectly captured
                    our brand identity and exceeded our expectations.`
    },
    {
      name: 'Campaign settings',
      company: 'Tesla Company',
      description: 'An ad group contains one or more ads which target a shared set of keywords.'
    },
    {
      name: 'Campaign settings',
      company: 'Zink Company',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`
    }
  ];

  return (
    <Box className="bg-blue" p={{ xs: 1, sm: 4, md: 10, lg: 10, xl: 10 }} pb={{ xs: 15, sm: 8, md: 8, lg: 8, xl: 8 }}>
      <Container maxWidth="xl">
        <Grid xs={12} sm={12} md={12} lg={12} xl={12} style={{ position: 'relative' }}>
          <img src={WaveTestimonialImage} alt="" style={{ position: 'relative', left: 0, top: 0, width: '100%', height: '100%' }} />
          <Box style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, height: '100%' }}>
            <Carousel
              navButtonsAlwaysVisible={true}
              swipe={true}
              cycleNavigation={true}
              navButtonsProps={{
                // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                  color: '#2c302e',
                  padding: '22px',
                  borderRadius: '30px',
                  border: '1px solid #A1D4F8',
                  background: 'linear-gradient(180deg, #CEEBFF, #A1D4F8)',
                  boxShadow: '0px 10px 15px -6px #3683bb4d, 0px 4px 0px 0px #ffffff33 inset'
                }
              }}
            >
              {steps.map((step, index) => (
                <>
                  <Grid
                    key={'x-' + index}
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    pt={{ xs: 8, sm: 14, md: 12, lg: 17, xl: 24 }}
                    pb={{ xs: 5, sm: 5, md: 12, lg: 15, xl: 20 }}
                    pl={{ xs: 3, sm: 7, md: 8, lg: 3, xl: 7 }}
                    pr={{ xs: 3, sm: 7, md: 8, lg: 3, xl: 7 }}
                    sx={{
                      position: 'relative'
                      //top: '30%'
                    }}
                  >
                    <Grid item xs={9} sm={8} md={10} lg={9} xl={8}>
                      <Box sx={{ textAlign: 'center' }} p={{ xs: 0, sm: 3, md: 1, lg: 2, xl: 3 }}>
                        <StarRateRoundedIcon fontSize={'large'} />
                        <StarRateRoundedIcon fontSize={'large'} />
                        <StarRateRoundedIcon fontSize={'large'} />
                        <StarRateRoundedIcon fontSize={'large'} />
                        <StarRateRoundedIcon fontSize={'large'} />
                      </Box>
                      <Typography variant="h3" textAlign={'center'}>
                        {step.description}
                      </Typography>
                    </Grid>
                    <Grid item xs={11} sm={10} md={12} lg={7} xl={7}>
                      <Grid container mt={{ xs: 0, sm: 0, md: 2, lg: 2, xl: 5 }} alignItems="center" justifyContent="center">
                        <Grid item xs={3} sm={2} md={2} lg={1} xl={1} p={{ xs: 0, sm: 3, md: 3, lg: 4, xl: 4 }}>
                          <Avatar sx={{ width: 56, height: 56 }}></Avatar>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={5} xl={5} p={{ xs: 0, sm: 3, md: 3, lg: 4, xl: 4 }}>
                          <Typography variant="body1" fontWeight={600}>
                            {step.name}
                          </Typography>
                          <Typography variant="body1">{step.company}</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          sm={3}
                          md={3}
                          lg={3}
                          xl={3}
                          style={{ borderLeft: '1px solid #2c302e' }}
                          p={{ xs: 2, sm: 2, md: 3, lg: 4, xl: 4 }}
                        >
                          <img src={WebflowLogo} alt="Company Logo" />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              ))}
            </Carousel>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
