import 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveAboutImage from 'assets/images/wave-about.svg';
import PricingBaxImage from 'assets/images/pricing-box-wave.svg';
import PricingShadowImage from 'assets/images/price-shadow.svg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import WaveBlogImage from 'assets/images/wave-blog.svg';
export default function Introduce() {
  function PriceItem({ plan, price, monthlyPrice, features, commingSoon }) {
    return (
      <Box>
        <Box className="pricing-box" pt={15} pb={15}>
          <img className="bg-wave" src={PricingBaxImage} alt="" />
          <Box mt={{ xs: -35, sm: -35, md: -25, lg: -30, xl: -35 }} p={{ xs: 7, sm: 7, md: 4, lg: 5, xl: 7 }}>
            <Box className="price-title" textAlign="center" pb={{ xs: 5, sm: 10, md: 4, lg: 10, xl: 7 }}>
              <Typography variant="h3">{plan}</Typography>
              <Typography variant="h1" lineHeight={2}>
                {price}
              </Typography>
              <Typography variant="body2">{monthlyPrice}</Typography>
            </Box>
            <Box pt={{ xs: 2, sm: 2, md: 0, lg: 3, xl: 3 }}>
              <Typography variant="body2" lineHeight={{ xs: 2, sm: 3, md: 2, lg: 5, xl: 5 }} fontWeight={700}>
                Includes:
              </Typography>
              <Box>
                {features.map((item, index) => (
                  <Typography key={'f-' + index} className="feature" variant="body2">
                    <CheckOutlinedIcon />
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Box pt={6} textAlign="center">
              <Button
                href={commingSoon ? '' : '/contact'}
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                className={commingSoon ? 'btn-comming-soon' : ''}
              >
                {commingSoon ? 'Comming Soon' : 'Request'} {!commingSoon && <ChevronRightIcon />}
              </Button>
            </Box>
          </Box>
        </Box>
        <img src={PricingShadowImage} alt="" style={{ width: '100%', height: '45px' }} />
      </Box>
    );
  }
  return (
    <Box className="bg-white" pt={{ xs: 5, sm: 5, md: 5, lg: 8, xl: 10 }}>
      {/* <Box
        className="bg-wave"
        sx={{
          backgroundImage: `url(${WaveAboutImage})`
        }}
        height={{ xs: 300, sm: 350, md: 400, lg: 400, xl: 480 }}
      ></Box> */}
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          spacing={5}
          pl={{ xs: 5, sm: 5, md: 5, lg: 0, xl: 0 }}
          pr={{ xs: 5, sm: 5, md: 5, lg: 0, xl: 0 }}
        >
          <Grid item xs={8} sm={7} md={4} lg={4} xl={4}>
            <PriceItem
              plan="Portfolio"
              price="$2,000"
              monthlyPrice="and 100$ Monthly Support"
              features={[
                'Fully responsive design',
                'Multi-page website',
                'Unlimited portfolio items',
                // 'Advanced filtering for portfolio',
                'Custom contact form',
                'SEO optimization',
                'Content management system(CMS)',
                'Hosting setup'
              ]}
            />
          </Grid>
          <Grid item xs={8} sm={7} md={4} lg={4} xl={4}>
            <PriceItem
              commingSoon={true}
              plan="E-Commerce"
              price="$4,000"
              monthlyPrice="and 100$ Monthly Support"
              features={[
                'Advanced product catalog',
                'Product reviews',
                'Customized shopping cart',
                'Stock management',
                'Discount and coupon functionality',
                'Tax and shipping calculation',
                'payment gateway integration'
              ]}
            />
          </Grid>
          <Grid item xs={8} sm={7} md={4} lg={4} xl={4}>
            <PriceItem
              plan="Web Application"
              price="$10/ph"
              monthlyPrice="and 200$ Monthly Support"
              features={[
                'Custom application design',
                'Database setup and management',
                'Advanced user security features',
                'Scalable architecture',
                'High-performance application',
                'Integrates with existing systems',
                'Custom API integration'
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
