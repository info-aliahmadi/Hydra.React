import 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';

function XIcon() {
  return (
    <svg
      className={'MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root'}
      viewBox="-2 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8427 0.742676H17.6028L11.5727 7.52008L18.6666 16.7427H13.1122L8.76173 11.1493L3.78386 16.7427H1.02207L7.4718 9.49348L0.666626 0.742676H6.36208L10.2945 5.8553L14.8427 0.742676ZM13.8739 15.1181H15.4034L5.53104 2.28196H3.88983L13.8739 15.1181Z"
        fill="#2C302E"
      />
    </svg>
  );
}

export default function ShareButtons() {
  function handleChange() {
    var url = window.location.href;
    // facebook
    //window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'facebook-share-dialog', 'width=800,height=600');

    //linkedIn
    // window.open('https://www.linkedin.com/share?url=' + url, 'linkedin-share-dialog', 'width=800,height=600');

    //twitter
    window.open('http://www.twitter.com/share?url=' + url, 'twitter-share-dialog', 'width=800,height=600');


    return false;
  }
  return (
    <Box>
      <Button variant="contained" color="info" sx={{ minWidth: '51px', padding: '7px 7px' }}>
        <LinkIcon fontSize="large" />
      </Button>
      <Button variant="contained" color="info" sx={{ minWidth: '51px', padding: '7px 7px' }} onClick={handleChange}>
        <XIcon size="large" color={'#000'} />
      </Button>
      <Button variant="contained" color="info" sx={{ minWidth: '51px', padding: '7px 7px' }} onClick={handleChange}>
        <LinkedInIcon fontSize="large" />
      </Button>
      <Button variant="contained" color="info" sx={{ minWidth: '51px', padding: '7px 7px' }} onClick={handleChange}>
        <FacebookOutlinedIcon fontSize="large" />
      </Button>
    </Box>
  );
}
