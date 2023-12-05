import { Grid, Link } from '@mui/material';
import { Box, Container } from '@mui/system';
import HomeService from 'modules/home/services/HomeService';
import 'react';
import { useEffect, useState } from 'react';

export default function Category({ active }) {
  const [categories, setCategories] = useState();

  var homeService = new HomeService();
  function loadCategories() {
    homeService.getCategories().then((result) => {
      setCategories(result);
    });
  }
  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <Box className="bg-white">
      <Container maxWidth="xl">
        <Grid container>
          <Box className="category" m={5} ml={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }} mr={{ xs: 3, sm: 10, md: 15, lg: 0, xl: 0 }}>
            <Link href={'/blog'}>View all</Link>
            {categories?.map((category, index) => (
              <Link
                key={'cat-' + index}
                href={category?.title == active ? '#' : '/blogcategory/' + category?.title}
                className={category?.title == active ? 'active' : ''}
              >
                {category?.title}
              </Link>
            ))}
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
