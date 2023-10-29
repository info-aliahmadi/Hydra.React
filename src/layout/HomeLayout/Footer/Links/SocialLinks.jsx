import 'react';
import { Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from 'assets/images/X-social.svg';

export default function SocialLinks() {
  return (
    <>
      <Typography variant="h5" sx={{ display: 'inline-block' }}>
        Follow Us
      </Typography>
      <ul className="footer-links social-link">
        <li>
          <a href="#">
            <FacebookOutlinedIcon fontSize="large" />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="#">
            <InstagramIcon fontSize="large" />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="#">
            <LinkedInIcon fontSize="large" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={XIcon} alt="" style={{ width: '25px'}} />
            <span>X</span>
          </a>
        </li>
      </ul>
    </>
  );
}
