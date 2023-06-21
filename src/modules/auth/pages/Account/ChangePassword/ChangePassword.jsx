// project import
import MainCard from 'components/MainCard';
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import ChangePasswordForm from './ChangePasswordForm';

// ===============================|| COLOR BOX ||=============================== //

function ChangePassword() {
  const [t] = useTranslation();
  return (
    <>
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MainCard title={t('pages.change-password')} codeHighlight>
            <ChangePasswordForm />
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
}

export default ChangePassword;
