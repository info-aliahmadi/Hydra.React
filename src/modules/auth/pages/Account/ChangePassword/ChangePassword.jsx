// project import
import MainCard from 'components/MainCard';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';
import ChangePasswordForm from './ChangePasswordForm';

// ===============================|| COLOR BOX ||=============================== //

function ChangePassword() {
  const [t] = useTranslation();
  return (
    <>
      <Grid container justifyContent="center" direction="row" alignItems="flex-start">
        <Grid container spacing={3} item xs={12} sm={12} md={6} lg={6} direction="column">
          <Grid item>
            <Typography variant="h5">{t('pages.change-password')}</Typography>
          </Grid>
          <Grid item>
            <MainCard codeHighlight>
              <ChangePasswordForm />
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ChangePassword;
