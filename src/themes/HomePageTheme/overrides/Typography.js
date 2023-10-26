// ==============================|| OVERRIDES - TYPOGRAPHY ||============================== //

export default function Typography(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        header: {
          [theme.breakpoints.up('xs')]: {
            fontSize: '2.1rem'
          },
          [theme.breakpoints.up('sm')]: {
            fontSize: '2.4rem'
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '3.4rem'
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: '4.0rem'
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: '4.8rem'
          }
        },
        h1: {
          [theme.breakpoints.up('xs')]: {
            fontSize: '2.1rem'
          },
          [theme.breakpoints.up('sm')]: {
            fontSize: '2.4rem'
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem'
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: '3.0rem'
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: '3.3rem'
          }
        },
        h2: {
          [theme.breakpoints.up('xs')]: {
            fontSize: '1.9rem'
          },
          [theme.breakpoints.up('sm')]: {
            fontSize: '2.0rem'
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '2.3rem'
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: '2.7rem'
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: '2.875rem'
          }
        },
        h3: {
          [theme.breakpoints.up('xs')]: {
            fontSize: '1.0rem'
          },
          [theme.breakpoints.up('sm')]: {
            fontSize: '1.3rem'
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem'
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: '1.9rem'
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: '2rem'
          }
        },
        gutterBottom: {
          marginBottom: 12
        }
      }
    }
  };
}
