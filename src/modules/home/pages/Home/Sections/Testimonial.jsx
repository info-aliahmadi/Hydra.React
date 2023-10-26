import { Avatar, Button, Grid, MobileStepper, Paper, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WebflowLogo from 'assets/images/webflow-logo.svg';

import WaveTestimonialImage from 'assets/images/wave-testimonial.svg';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import 'react';
import { useState } from 'react';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box style={{ background: '#A1D4F8' }}>
      <Container>
        <Grid xs={12} sm={12} md={12} lg={12} xd={12} style={{ position: 'relative' }}>
          <img src={WaveTestimonialImage} alt="" height={'100%'} width={'100%'} style={{ position: 'absolute' }} />
          <AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
            {steps.map((step, index) => (
              <Grid
                key={'x-' + index}
                item
                container
                justifyContent="center"
                alignItems="center"
                sx={
                  {
                    //position: 'absolute',
                    //top: '30%'
                  }
                }
              >
                <Grid item xs={9} sm={8} md={7} lg={7} xd={7}>
                  <Typography variant="h3" textAlign={'center'}>
                    {step.description}
                  </Typography>
                </Grid>
                <Grid item xs={11} sm={10} md={8} lg={7} xd={7}>
                  <Grid container mt={{ xs: 0, sm: 4, md: 4, lg: 5, xd: 5 }} alignItems="center" justifyContent="center">
                    <Grid item xs={3} sm={2} md={2} lg={1} xd={1} p={{ xs: 2, sm: 2, md: 3, lg: 4, xd: 4 }}>
                      <Avatar sx={{ width: 56, height: 56 }}></Avatar>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={5} xd={5} p={{ xs: 2, sm: 2, md: 3, lg: 4, xd: 4 }}>
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
                      xd={3}
                      style={{ borderLeft: '1px solid #2c302e' }}
                      p={{ xs: 2, sm: 2, md: 3, lg: 4, xd: 4 }}
                    >
                      <img src={WebflowLogo} alt="Company Logo" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </AutoPlaySwipeableViews>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={12} xd={12}>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                <EastRoundedIcon />
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                <WestRoundedIcon />
              </Button>
            }
          />
        </Grid>
      </Container>
    </Box>
  );
}
