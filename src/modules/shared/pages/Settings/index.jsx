// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import SiteSetting from 'modules/cms/pages/Settings';
import { useTranslation } from 'react-i18next';

// ===============================|| COLOR BOX ||=============================== //

function Setting() {
  const [t] = useTranslation();
  return (
    <>
      <Grid container justifyContent="center" direction="row" alignItems="flex-start">
        <Grid container spacing={3} item xs={12} sm={12} md={12} lg={12} xl={7} direction="column">
          <Grid item>
            <Typography variant="h5">{t('pages.siteSettings')}</Typography>
          </Grid>
          <Grid item>
            <MainCard>
              <SiteSetting />
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Setting;
