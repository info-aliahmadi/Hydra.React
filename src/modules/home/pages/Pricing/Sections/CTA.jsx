import 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveContactImage from 'assets/images/wave-contact.svg';

export default function CTA() {
  return (
    <Box className="bg-blue">
      <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveContactImage})`
        }}
        height={{ xs: 300, sm: 350, md: 400, lg: 450, xl: 400 }}
      ></Box>
      <Container maxWidth="xl">
        <Grid container>
          <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} pt={{ xs: 5, sm: 8, md: 8, lg: 8, xl: 8 }} justifyContent="center">
            <Grid item sx={{ textAlign: 'center' }}>
              <Typography variant="h1" pt={2}>
                <span className="gradient-text2">Invest</span> in Your Future: Build a Website with Us
              </Typography>
              <Typography variant="body2" pt={4} pb={4}>
                At OnWave Design, we specialize in proving cutting-edge web design
              </Typography>
              <Box>
                <Button href="/contact" variant="contained" color="info" size="large">
                  Consult
                </Button>
                <Button href="/contact" variant="contained" color="primary" size="large">
                  Request
                </Button>
              </Box>
            </Grid>
          </Grid>
          {/* <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} justifyContent="space-evenly" alignItems="center">
            <Box m={1}>
              <img alt="Visual Studio" title="Visual Studio" src={visualStudio} height={'100px'} />
            </Box>
            <Box m={1}>
              <img alt=".Net" title=".Net" src={dontNet} height={'100px'} />
            </Box>
            <Box m={1}>
              <img alt="ASP.Net" title="ASP.Net" src={aspNet} height={'100px'} />
            </Box>
            <Box m={1}>
              <img alt="C#" title="C#" src={csharp} height={'100px'} />
            </Box>
            <Box m={1}>
              <img alt="Sql Server" title="Sql Server" src={sqlserver} height={'100px'} />
            </Box>
            <Box m={1}>
              <img alt="MongoDB" title="MongoDB" src={mongo} height={'100px'} />
            </Box>
            <Box m={1}>
              <img alt="Elastic" title="Elastic" src={elastic} height={'100px'} />
            </Box>
            <Box m={1}>
              <img alt="Kibana" title="Kibana" src={kibana} height={'100px'} />
            </Box>
            <Box m={1}>
              <img alt="Redis" title="Redis" src={redis} height={'100px'} />
            </Box>
            <Box m={1}>
              <img alt="Javascript" title="Javascript" src={javascript} height={'100px'} />
            </Box>
            <Box m={1}>
              <img alt="Reactjs" title="Reactjs" src={reactjs} height={'100px'} />
            </Box>
            <Box m={1}>
              <img alt="Figma" title="Figma" src={figma} height={'100px'} />
            </Box>
            <Box m={1}>
              <img alt="Blender" title="Blender" src={material} height={'100px'} />
            </Box>
            <Box m={1}>
              <img alt="Blender" title="Blender" src={blender} height={'100px'} />
            </Box>
            <Box m={1}>
              <img alt="Spline" title="Spline" src={spline} height={'100px'} />
            </Box>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
}
