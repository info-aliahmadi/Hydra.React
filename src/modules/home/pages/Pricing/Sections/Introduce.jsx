import 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveAboutImage from 'assets/images/wave-about.svg';
import PricingBaxImage from 'assets/images/pricing-box-wave.svg';
import PricingShadowImage from 'assets/images/price-shadow.svg';

import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

export default function Introduce() {
  function PriceItem() {
    return (
      <Box>
        <Box className="pricing-box" pt={15} pb={15}>
          <img className="bg-wave" src={PricingBaxImage} alt="" />
          <Box mt={{ xs: -35, sm: -35, md: -25, lg: -30, xl: -35 }} p={{ xs: 7, sm: 7, md: 4, lg: 5, xl: 7 }}>
            <Box className="price-title" textAlign="center" pb={{ xs: 5, sm: 10, md: 4, lg: 10, xl: 10 }}>
              <Typography variant="h3">Basic plan</Typography>
              <Typography variant="h1" lineHeight={2}>
                $19/mo
              </Typography>
              <Typography variant="body2">or $199 yearly</Typography>
            </Box>
            <Box pt={{ xs: 2, sm: 2, md: 0, lg: 3, xl: 3 }}>
              <Typography variant="body2" lineHeight={{ xs: 2, sm: 3, md: 2, lg: 5, xl: 5 }} fontWeight={700}>
                Includes:
              </Typography>
              <Box>
                <Typography className="feature" variant="body2">
                  <CheckOutlinedIcon />
                  Feature text goes here
                </Typography>
                <Typography className="feature" variant="body2">
                  <CheckOutlinedIcon />
                  Feature text goes here
                </Typography>
                <Typography className="feature" variant="body2">
                  <CheckOutlinedIcon />
                  Feature text goes here
                </Typography>
                <Typography className="feature" variant="body2">
                  <CheckOutlinedIcon />
                  Feature text goes here
                </Typography>
                <Typography className="feature" variant="body2">
                  <CheckOutlinedIcon />
                  Feature text goes here
                </Typography>
              </Box>
            </Box>
            <Box pt={6} textAlign="center">
              <Button variant="contained" color="primary" size="large" fullWidth>
                Request
              </Button>
            </Box>
          </Box>
        </Box>
        <img src={PricingShadowImage} alt="" style={{ width: '100%', height: '45px' }} />
      </Box>
    );
  }
  return (
    <Box className="bg-white">
      <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveAboutImage})`
        }}
        height={{ xs: 300, sm: 350, md: 400, lg: 400, xl: 480 }}
      ></Box>
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          spacing={5}
          pt={{ xs: 5, sm: 5, md: 5, lg: 8, xl: 10 }}
          pl={{ xs: 5, sm: 5, md: 5, lg: 0, xl: 0 }}
          pr={{ xs: 5, sm: 5, md: 5, lg: 0, xl: 0 }}
        >
          <Grid item xs={8} sm={7} md={4} lg={4} xl={4}>
            <PriceItem />
          </Grid>
          <Grid item xs={8} sm={7} md={4} lg={4} xl={4}>
            <PriceItem />
          </Grid>
          <Grid item xs={8} sm={7} md={4} lg={4} xl={4}>
            <PriceItem />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
