import { Typography } from '@mui/material';
import HomeService from 'modules/home/services/HomeService';
import 'react';
import { useEffect, useState } from 'react';

export default function RecentPostLinks() {
  const [recentPost, setRecentPost] = useState();

  var homeService = new HomeService();

  function loadLinks() {
    homeService.getLinksByKeyList('RecentPosts').then((result) => {
      setRecentPost(result);
    });
  }
  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <>
      <Typography variant="h5" className="footer-title">
        RECENT POSTS
      </Typography>
      <ul className="footer-links">
        {recentPost?.map((link, index) => (
          <li key={'lf-' + index}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
