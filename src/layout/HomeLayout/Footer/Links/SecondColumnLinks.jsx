import { Typography } from '@mui/material';
import 'react';

export default function SecondColumnLinks() {
  return (
    <>
      <Typography variant="h5">Column One</Typography>
      <ul className="footer-links">
        <li>
          <a href="#">Link One</a>
        </li>
        <li>
          <a href="#">Link Two</a>
        </li>
        <li>
          <a href="#">Link Three</a>
        </li>
        <li>
          <a href="#">Link Four</a>
        </li>
        <li>
          <a href="#">Link Five</a>
        </li>
      </ul>
    </>
  );
}
