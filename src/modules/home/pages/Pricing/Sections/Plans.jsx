import { Button, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WaveServiceImage from 'assets/images/wave-service.svg';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import 'react';

export default function Plans() {
  function PlanBox() {
    return (
      <Box className="plan-box" p={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 5 }} textAlign="center">
        <Typography variant="h3">Basic plan</Typography>
        <Typography variant="h1" lineHeight={2}>
          $19/mo
        </Typography>
        <Typography variant="body1" lineHeight={3}>
          Feature text goes here
        </Typography>
        <Button variant="contained" color="primary" size="large" fullWidth>
          Request
        </Button>
      </Box>
    );
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
  ];

  return (
    <Box className="bg-blue">
      <img alt="" src={WaveServiceImage} width="100%" />
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            container
            item
            rowSpacing={{ xs: 7, sm: 7, md: 5, lg: 7, xl: 7 }}
            pt={{ xs: 3, sm: 10, md: 10, lg: 10, xl: 10 }}
            pb={{ xs: 3, sm: 10, md: 10, lg: 10, xl: 10 }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Stack alignItems="center" textAlign={'center'} pt={15} pb={5}>
              <Typography variant="h5" pt={2}>
                Tagline
              </Typography>
              <Typography variant="h1" pt={2}>
                Medium length section heading goes here
              </Typography>
              <Typography variant="body2" pt={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,
                mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </Typography>
            </Stack>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} textAlign={'center'}>
              <TableContainer>
                <Table className="feature-table">
                  {/* <TableHead>
                    <TableRow>
                      <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                      <StyledTableCell align="right">Calories</StyledTableCell>
                      <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                    </TableRow>
                  </TableHead> */}
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" align="center"></TableCell>
                      <TableCell component="th">
                        <PlanBox />
                      </TableCell>
                      <TableCell component="th" align="center">
                        <PlanBox />
                      </TableCell>
                      <TableCell component="th" align="center">
                        <PlanBox />
                      </TableCell>
                    </TableRow>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" align="left" sx={{ width: '200px' }}>
                          Feature 1
                        </TableCell>
                        <TableCell component="th" align="center">
                          <CheckOutlinedIcon />
                        </TableCell>
                        <TableCell component="th" align="center">
                          <CheckOutlinedIcon />
                        </TableCell>
                        <TableCell component="th" align="center">
                          <CheckOutlinedIcon />
                        </TableCell>
                      </TableRow>
                    ))}
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" align="left" sx={{ width: '200px' }}>
                          Feature 1
                        </TableCell>
                        <TableCell component="th" align="center">
                          <CheckOutlinedIcon />
                        </TableCell>
                        <TableCell component="th" align="center">
                          <CheckOutlinedIcon />
                        </TableCell>
                        <TableCell component="th" align="center">
                          <CheckOutlinedIcon />
                        </TableCell>
                      </TableRow>
                    ))}
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" align="left" sx={{ width: '200px' }}>
                          Feature 1
                        </TableCell>
                        <TableCell component="th" align="center">
                          <CheckOutlinedIcon />
                        </TableCell>
                        <TableCell component="th" align="center">
                          <CheckOutlinedIcon />
                        </TableCell>
                        <TableCell component="th" align="center">
                          <CheckOutlinedIcon />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
