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
import { QuestionAnswer, ViewTimeline, Handshake, Preview, DeveloperMode, RocketLaunch, Feedback, ThumbUpAlt } from '@mui/icons-material';

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
            <Grid item xs={12} sm={12} md={8} lg={7} xl={7}>
              <Timeline>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  ></TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{ padding: '18px' }}>
                      <QuestionAnswer fontSize="large" />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '15px', px: 4 }}>
                    <Typography variant="subtitle2">Consultation and Requirements</Typography>
                    <Typography variant="body1" p={2}>
                      The client reaches out with a project idea or request and we schedule a meeting to discuss the project scope, goals,
                      and any initial ideas or requirements.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                    1 Week
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{ padding: '18px' }}>
                      <ViewTimeline fontSize="large" />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '30px', px: 4 }}>
                    <Typography variant="subtitle2">Proposal and Estimate</Typography>
                    <Typography variant="body1" p={2}>
                      Based on the consultation, we create a project proposal that outlines the services you will provide, the timeline, and
                      the cost estimate.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                    3 Days
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{ padding: '18px' }}>
                      <Handshake fontSize="large" />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '30px', px: 4 }}>
                    <Typography variant="subtitle2">Contract</Typography>
                    <Typography variant="body1" p={2}>
                      Once the client approves the proposal, the client and We sign a contract then The client pays a deposit, which is
                      typically a percentage of the total project cost.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                    3 to 4 Weeks
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{ padding: '18px' }}>
                      <Preview fontSize="large" />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '30px', px: 4 }}>
                    <Typography variant="subtitle2">Design</Typography>
                    <Typography variant="body1" p={2}>
                      Our team creates wireframes and mockups to establish the layout and user interface. The client provides feedback.
                      Iterative design cycles ensure the client is satisfied with the look and feel of the application.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                    1 to 6 Months
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{ padding: '18px' }}>
                      <DeveloperMode fontSize="large" />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '30px', px: 4 }}>
                    <Typography variant="subtitle2">Development</Typography>
                    <Typography variant="body1" p={2}>
                      Once the design is approved, the development begins. Our team write the code for the application, ensuring it is built
                      to the agreed-upon specifications.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                    3 Days
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{ padding: '18px' }}>
                      <RocketLaunch fontSize="large" />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '30px', px: 4 }}>
                    <Typography variant="subtitle2">Launch</Typography>
                    <Typography variant="body1" p={2}>
                      We offer a period of support and maintenance after the launch to address any issues that arise. This may include
                      regular updates, security patches, and performance optimizations.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                    2 Weeks
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{ padding: '18px' }}>
                      <Feedback fontSize="large" />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '30px', px: 4 }}>
                    <Typography variant="subtitle2">Feedback</Typography>
                    <Typography variant="body1" p={2}>
                      Based on user feedback and analytics, we may suggest improvements or new features to enhance the application. The
                      client can request changes or updates, which are implemented as part of the maintenance contract or in a new project.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot>
                      <ThumbUpAlt fontSize="large" />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '30px', px: 4 }}>
                    <Typography variant="subtitle2">Project Closure</Typography>
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
