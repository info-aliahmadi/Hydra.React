// material-ui
import { Grid } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { useTranslation } from 'react-i18next';
import ChangeLanguageForm from './ChangeLanguageForm';

// ===============================|| COLOR BOX ||=============================== //

function ChangeLanguage() {
  const [t] = useTranslation();
  return (
    <>
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MainCard title={t('pages.language')} codeHighlight>
            <ChangeLanguageForm />
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
}

export default ChangeLanguage;
