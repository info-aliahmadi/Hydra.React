import 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

export default function PostTags({ tags }) {
  return (
    <Box>
      {tags?.map((tag, index) => (
        <Button key={'tag-' + index} href={'/blogTag/' + tag} variant="contained" color="info">
          {tag}
        </Button>
      ))}
    </Box>
  );
}
