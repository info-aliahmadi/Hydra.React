// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme) {
  const disabledStyle = {
    '&.Mui-disabled': {
      backgroundColor: theme.palette.grey[200]
    }
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          margin: 5,
          fontWeight: 400,
          borderRadius: 30
        },
        contained: {
          border: 'none',
          background: 'linear-gradient(180deg, #8EDDFF 0%, #8772D8 100%)',
          boxShadow: '0px 9px 12px -10px rgba(0, 0, 0, 0.15), 0px 3px 0px 0px rgba(255, 255, 255, 0.20) inset',
          position: 'relative',
          '&.MuiButton-contained::before': {
            borderRadius: 30,
            content: "''",
            top: '-1px',
            left: '-1px',
            bottom: '-1px',
            right: '-1px',
            position: 'absolute',
            zIndex: '-1',
            backgroundImage: 'linear-gradient(to bottom, #8DD6ED 0%, #7F66D4 100%)'
          },
          '&.MuiButton-contained:hover': {
            border: 'none'
          }
        },
        outlined: {
          color: '#2C302E',
          border: 'none',
          background: 'linear-gradient(180deg, #CEEBFF, #A1D4F8)',
          boxShadow: '0px 10px 12px -10px rgba(0, 0, 0, 0.10), 0px 2px 0px 0px rgba(255, 255, 255, 0.20) inset',
          position: 'relative',
          '&.MuiButton-outlined::before': {
            borderRadius: 30,
            content: "''",
            top: '-1px',
            left: '-1px',
            bottom: '-1px',
            right: '-1px',
            position: 'absolute',
            zIndex: '-1',
            backgroundImage: 'linear-gradient(to bottom, #8DD6ED 0%, #7F66D4 100%)'
          },
          '&.MuiButton-outlined:hover': {
            border: 'none'
          }
        },
        text: {
          color: '#2C302E'
        }
      }
    }
  };
}
