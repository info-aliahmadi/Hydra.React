import 'react';
import { Button, Collapse, Grid, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveAboutImage from 'assets/images/wave-about-3.svg';
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  function QuestionItem() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
      <>
        <ListItemButton className="question" onClick={handleClick}>
          <ListItemText primary="Question text goes here?" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" className="answer" disablePadding>
            <Box sx={{ pl: 4 }}>
              <ListItemText primary="Answer text goes here?" />
            </Box>
          </List>
        </Collapse>
      </>
    );
  }
  return (
    <Box className="bg-white">
      <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveAboutImage})`
        }}
        height={{ xs: 300, sm: 300, md: 320, lg: 350, xl: 380 }}
      ></Box>
      <Container maxWidth="xl">
        <Grid container pt={{ xs: 3, sm: 5, md: 6, lg: 0, xl: 0 }}>
          <Grid container alignItems="center" alignContent="center" justifyContent="center">
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
              <Stack
                alignItems="center"
                textAlign={'center'}
                pt={{ xs: 0, sm: 0, md: 0, lg: 5, xl: 5 }}
                pb={15}
                pl={{ xs: 0, sm: 0, md: 5, lg: 0, xl: 0 }}
                pr={{ xs: 0, sm: 0, md: 5, lg: 0, xl: 0 }}
              >
                <Typography variant="h1" pt={2}>
                  FAQs
                </Typography>
                <Typography variant="body2" pt={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,
                  mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} spacing={10}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box>
                <List component="nav" className="faq">
                  <QuestionItem />
                  <QuestionItem />
                  <QuestionItem />
                  <QuestionItem />
                  <QuestionItem />
                  <QuestionItem />
                  <QuestionItem />
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box>
                <List component="nav" className="faq">
                  <QuestionItem />
                  <QuestionItem />
                  <QuestionItem />
                  <QuestionItem />
                  <QuestionItem />
                  <QuestionItem />
                  <QuestionItem />
                </List>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Stack alignItems="center" textAlign={'center'} pt={5} pb={5}>
              <Typography variant="h2" pt={2}>
                Still have a question?
              </Typography>
              <Typography variant="body2" pt={4} pb={4}>
                Lorem ipsum dolor sit amet
              </Typography>
              <Button href="/contact" variant="contained" color="info" size="large">
                Consult
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
