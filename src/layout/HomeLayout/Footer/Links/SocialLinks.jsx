import 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from 'assets/images/X-social.svg';

export default function SocialLinks() {
  return (
    <>
      <ul className="footer-links social-link">
        <li>
          <a href="#">
            <FacebookOutlinedIcon fontSize="medium" />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="#">
            <InstagramIcon fontSize="medium" />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="#">
            <LinkedInIcon fontSize="medium" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="#">
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.8427 0.742676H17.6028L11.5727 7.52008L18.6666 16.7427H13.1122L8.76173 11.1493L3.78386 16.7427H1.02207L7.4718 9.49348L0.666626 0.742676H6.36208L10.2945 5.8553L14.8427 0.742676ZM13.8739 15.1181H15.4034L5.53104 2.28196H3.88983L13.8739 15.1181Z"
                fill="#EAEEFD"
              />
            </svg>

            <span>X</span>
          </a>
        </li>
      </ul>
    </>
  );
}