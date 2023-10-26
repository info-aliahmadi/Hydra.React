// material-ui
import { alpha } from '@mui/material/styles';

// ==============================|| OVERRIDES - OUTLINED INPUT ||============================== //

export default function OutlinedInput(theme) {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          border: 'none'
          //padding: '10.5px 14px 10.5px 12px'
          // borderRadius: '30px',
          // border: '6px solid #94C4F1',
          // background: 'rgba(248, 249, 255, 0.80)',
          // boxShadow: '0px 1px 0px 0px #85BDE4 inset'
        },
        notchedOutline: {
          //borderColor: '#94C4F1'
          borderRadius: '30px'
        },
        root: {
          //padding: '10.5px 14px 10.5px 12px',
          borderRadius: '30px',
          border: '6px solid #94C4F1',
          background: 'rgba(248, 249, 255, 0.80)',
          boxShadow: '0px 1px 0px 0px #85BDE4 inset',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#94C4F1' // theme.palette.primary.light
          },
          '&.Mui-focused': {
            boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
            '& .MuiOutlinedInput-notchedOutline': {
              border: `6px solid #94C4F1` // `1px solid ${theme.palette.primary.light}`,
            }
          },
          '&.Mui-error': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              //borderColor: theme.palette.error.light
            },
            '&.Mui-focused': {
              boxShadow: `0 0 0 2px ${alpha(theme.palette.error.main, 0.2)}`,
              '& .MuiOutlinedInput-notchedOutline': {
                //border: `1px solid ${theme.palette.error.light}`
              }
            }
          }
        },
        inputSizeSmall: {
          padding: '7.5px 8px 7.5px 12px'
        },
        inputMultiline: {
          padding: 0
        }
      }
    }
  };
}
