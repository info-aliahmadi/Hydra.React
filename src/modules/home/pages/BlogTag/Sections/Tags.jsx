import { Grid, Link } from '@mui/material';
import { Box, Container } from '@mui/system';
import HomeService from 'modules/home/services/HomeService';
import 'react';
import { useEffect, useState } from 'react';

export default function Tags({ active }) {
  const [tags, setTags] = useState();

  var homeService = new HomeService();
  function loadTags() {
    homeService.getTags().then((result) => {
      setTags(result);
    });
  }
  useEffect(() => {
    loadTags();
  }, []);

  return (
    <Box className="bg-white" pt={{ xs: 10, sm: 10, md: 0, lg: 0, xl: 0 }}>
      <Container maxWidth="xl">
        <Grid container>
          <Box className="tag" p={5} pl={{ xs: 5, sm: 5, md: 15, lg: 0, xl: 0 }} pr={{ xs: 5, sm: 5, md: 5, lg: 0, xl: 0 }}>
            {tags?.map((tag, index) => (
              <Link
                key={'cat-' + index}
                href={tag?.title == active ? '#' : '/blogtag/' + tag?.title}
                className={tag?.title == active ? 'active' : ''}
              >
                {tag?.title}
              </Link>
            ))}
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
