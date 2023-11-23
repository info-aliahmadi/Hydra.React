// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import MessageTrashDataGrid from './MessagesTashDataGrid';
import { useTranslation } from 'react-i18next';
// ===============================|| COLOR BOX ||=============================== //

function MessagesTrashList() {
  const [t] = useTranslation();
  return (
    <>
      <Grid container justifyContent="center" direction="row" alignItems="flex-start">
        <Grid container spacing={3} item xs={12} sm={12} md={12} lg={12} direction="column">
          <Grid item>
            <Typography variant="h5">{t('pages.articlesTrash')}</Typography>
          </Grid>
          <Grid item>
            <MessageTrashDataGrid />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MessagesTrashList;
