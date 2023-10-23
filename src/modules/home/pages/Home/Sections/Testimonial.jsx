import { Button, Grid, MobileStepper, Paper, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import Feature1Image from 'assets/images/Feature-1.png';
import Feature2Image from 'assets/images/Feature-2.png';
import Feature3Image from 'assets/images/Feature-3.png';
import WaveTestimonialImage from 'assets/images/wave-testimonial.svg';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import 'react';
import { useState } from 'react';

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
  return (
    <Box style={{ background: '#A1D4F8' }}>
      <Container>
        <Grid xs={12} sm={12} md={12} lg={12} xd={12} style={{ position: 'relative' }}>
          <img src={WaveTestimonialImage} alt="" height={'100%'} width={'100%'} />
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 2,
              bgcolor: 'background.default',
              position: 'absolute',
              top: '40%'
            }}
          >
            <Grid item rowSpacing={{ xs: 7, sm: 7, md: 5, lg: 7, xd: 7 }} xs={10} sm={10} md={10} lg={10} xd={10}>
              <Typography variant="h3">{steps[activeStep].description}</Typography>
            </Grid>
            <Grid item rowSpacing={{ xs: 7, sm: 7, md: 5, lg: 7, xd: 7 }} xs={10} sm={10} md={10} lg={10} xd={10}>
              <Typography variant="body1">
                {steps[activeStep].name} / {steps[activeStep].company}
              </Typography>
            </Grid>
            {/* <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
              {steps[activeStep].name} / {steps[activeStep].company}
            </Box> */}
          </Paper>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={12} xd={12}>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                <EastRoundedIcon style={{ position: 'relative', top: '40%' }} />
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                <WestRoundedIcon style={{ position: 'relative', top: '40%' }} />
              </Button>
            }
          />
        </Grid>
      </Container>
    </Box>
  );
}
