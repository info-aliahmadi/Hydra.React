import { Typography } from '@mui/material';
import HomeService from 'modules/home/services/HomeService';
import 'react';
import { useEffect, useState } from 'react';

export default function CategoriesLinks() {
  const [categories, setCategories] = useState();

  var homeService = new HomeService();

  function loadLinks() {
    homeService.getLinksByKeyList('Categories').then((result) => {
      setCategories(result);
    });
  }
  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <>
      <Typography variant="h5" className="footer-title">
        CATEGORIES
      </Typography>
      <ul className="footer-links">
        {categories?.map((link, index) => (
          <li key={'ls-' + index}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
