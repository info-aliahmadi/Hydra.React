// material-ui
import { Grid } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import ProfileForm from './Profile-Form/ProfileForm';
import { useTranslation } from 'react-i18next';

// ===============================|| COLOR BOX ||=============================== //

function Profile() {
  const [t] = useTranslation();
  return (
    <>
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MainCard title={t('pages-title.profile')} codeHighlight>
            <ProfileForm />
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
