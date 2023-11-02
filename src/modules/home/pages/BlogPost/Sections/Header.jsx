import 'react';
import { Grid, Link, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveBlogImage from 'assets/images/wave-blog.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Author from './Author';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from 'assets/images/X-social.svg';
import LinkIcon from '@mui/icons-material/Link';

export default function Header() {
  return (
    <Box className="bg-white">
      <img alt="" src={WaveBlogImage} width="100%" style={{ position: 'absolute', background: 'var(--white)' }} />
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            p={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
            pt={{ xs: 3, sm: 10, md: 15, lg: 20, xl: 20 }}
          >
            <Typography variant="body2" pt={2} display="block">
              Blog <ArrowForwardIosIcon /> Category
            </Typography>
            <Typography variant="h1" pt={2}>
              Blog title heading will go here
            </Typography>
            <Box>
              <Author />
              <Box>
                <Link href="#">
                  <LinkIcon />
                </Link>
                <Link href="#">
                  <img src={XIcon} alt="" />
                </Link>
                <Link href="#">
                  <LinkedInIcon />
                </Link>
                <Link href="#">
                  <FacebookOutlinedIcon />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
