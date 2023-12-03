import { Button, Fade, Grid, Grow, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveAboutImage from 'assets/images/wave-about.svg';
import 'react';
import visualStudio from 'assets/images/tech/visualStudio.png';
import dontNet from 'assets/images/tech/dotnet.png';
import aspNet from 'assets/images/tech/aspnet.png';
import csharp from 'assets/images/tech/csharp.png';
import sqlserver from 'assets/images/tech/sqlserver.png';
import mongo from 'assets/images/tech/mongo.png';
import elastic from 'assets/images/tech/elastic.png';
import kibana from 'assets/images/tech/kibana.png';
import redis from 'assets/images/tech/redis.png';
import javascript from 'assets/images/tech/javascript.png';
import reactjs from 'assets/images/tech/reactjs.png';
import figma from 'assets/images/tech/figma.png';
import material from 'assets/images/tech/material.png';
import blender from 'assets/images/tech/blender.png';
import spline from 'assets/images/tech/spline.png';
export default function Story() {
  return (
    <Box className="bg-white">
      <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveAboutImage})`
        }}
        height={{ xs: 300, sm: 300, md: 350, lg: 400, xl: 460 }}
      ></Box>
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            rowSpacing={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }}
            p={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}
            className="xyz-in"
          >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="h5" pt={2} xyz="fade small stagger ease-out-back">
                Innovative
              </Typography>
              <Typography variant="h1" pt={2} xyz="fade small stagger ease-out-back">
                <span className="gradient-text">Transforming Ideas</span> into Stunning Web Experiences
              </Typography>

              <Grid
                container
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={10}
                justifyContent="space-evenly"
                alignItems="center"
                pt={10}
                pb={10}
              >
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
                <Box m={1} className="xyz-nested">
                  <img alt="Blender" title="Blender" src={material} height={'100px'} />
                </Box>
                <Box m={1} className="xyz-nested">
                  <img alt="Blender" title="Blender" src={blender} height={'100px'} />
                </Box>
                <Box m={1} className="xyz-nested">
                  <img alt="Spline" title="Spline" src={spline} height={'100px'} />
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="body2" p={{ xs: 1, sm: 1, md: 3, lg: 10, xl: 10 }}>
                Welcome to <strong className="gradient-text">OnWaveDesign</strong> , the website of a team of professional web developers
                based in Karlsruhe, Germany. We have over <strong className="gradient-text"> 15 years of combined experience</strong> in
                creating beautiful, responsive, and user-friendly websites for various clients and purposes. We specialize in{' '}
                <strong className="gradient-text"> front-end development </strong> , using the latest technologies and frameworks such as
                <strong className="gradient-text"> HTML5, CSS3, JavaScript, React, Bootstrap and Material Design(MUI) </strong> . We also
                have skills in <strong className="gradient-text"> back-end development </strong> , working with
                <strong className="gradient-text"> .NET, ASP.Net, SQL Server and MongoDB </strong> . We can create websites from scratch, or
                redesign and improve existing ones. We can also integrate various features and functionalities such as e-commerce, blogs,
                contact forms, social media, and more. We are passionate about web development and always eager to learn new things and
                challenge ourselves. We value quality, creativity, and customer satisfaction. We work closely with our clients to understand
                their needs and expectations, and deliver the <strong className="gradient-text"> best solutions </strong> for their
                projects. If you are looking for a team of web developers who can create a stunning and functional website for you, you have
                come to the right place. Please feel free to browse our website. You can also read the testimonials from our previous
                clients, who were happy with our work and service. If you are interested in hiring us, or have any questions or inquiries,
                please do not hesitate to
                <strong className="gradient-text"> contact us </strong> . You can use the contact form on this website, or send us an email
                at<strong className="gradient-text"> info@OnWaveDesign.com </strong> . We will get back to you as soon as possible. Thank
                you for visiting our website. We hope to hear from you soon.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
