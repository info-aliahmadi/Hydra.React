import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';

export default function Process() {
  return (
    <Box className="bg-white">
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            container
            item
            justifyContent="center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            rowSpacing={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }}
            pt={{ xs: 3, sm: 10, md: 15, lg: 10, xl: 10 }}
            pb={{ xs: 3, sm: 10, md: 15, lg: 10, xl: 10 }}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} justifyContent="center" textAlign="center">
              <Typography variant="h5" pt={2}>
                Process of the work
              </Typography>
              <Typography variant="h1" pt={2}>
                How We Work?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
              <Timeline draggable>
                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">
                    9:30 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '15px', px: 4 }}>
                    <Typography variant="subtitle2">Eat</Typography>
                    <Typography>
                      Because you need strength Because you need strength Because you need strength Because you need strength Because you
                      need strength Because you need strength
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                    10:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '30px', px: 4 }}>
                    <Typography variant="subtitle2">Code</Typography>
                    <Typography>
                      Because you need strength Because you need strength Because you need strength Because you need strength Because you
                      need strength Because you need strength
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '30px', px: 4 }}>
                    <Typography variant="subtitle2">Sleep</Typography>
                    <Typography>
                      Because you need strength Because you need strength Because you need strength Because you need strength Because you
                      need strength Because you need strength
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      <RepeatIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '30px', px: 4 }}>
                    <Typography variant="subtitle2">Repeat</Typography>
                    <Typography>
                      Because you need strength Because you need strength Because you need strength Because you need strength Because you
                      need strength Because you need strength
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot>
                      <RepeatIcon />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '30px', px: 4 }}>
                    <Typography variant="subtitle2">Finish</Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
