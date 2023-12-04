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
    <Box className="bg-white" pt={{ xs: 10, sm: 10, md: 0, lg: 0, xl: 0 }}>
      <Container maxWidth="xl">
        <Grid container>
          <Box className="category" p={5} pl={{ xs: 5, sm: 5, md: 15, lg: 0, xl: 0 }} pr={{ xs: 5, sm: 5, md: 5, lg: 0, xl: 0 }}>
            <Link href={'/blog'}>View all</Link>
            {categories?.map((category, index) => (
              <Link
                key={'cat-' + index}
                href={category?.title == active ? '#' : '/blogcategory/' + category?.title}
                className={category?.title == active ? 'active' : ''}
                disabled
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
