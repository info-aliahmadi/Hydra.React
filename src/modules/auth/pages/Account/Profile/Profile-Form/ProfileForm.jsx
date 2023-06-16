import { useEffect, useState } from 'react';

// material-ui
import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { useTranslation } from 'react-i18next';
import AccountService from 'modules/auth/services/Account/AccountService';

// ============================|| FIREBASE - REGISTER ||============================ //

const ProfileForm = () => {
  const [t] = useTranslation();

  let accountService = new AccountService();

  const [fieldsName, validation, buttonName] = ['fields-name.', 'validation.', 'buttons-name.'];
  const [user, setUser] = useState();

  const loadUser = () => {
    accountService.getCurrentUser().then((userData) => {
      setUser(userData);
    });
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          fullName: user?.fullName,
          username: user?.username,
          phoneNumber: user?.phoneNumber,
          email: user?.email
        }}
        enableReinitialize={true}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .max(255)
            .required(t(validation + 'requiredUsername')),
          email: Yup.string()
            .email(t(validation + 'valid-email'))
            .max(255)
            .required(t(validation + 'required-email'))
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: false });
            setSubmitting(false);
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="fullName-signup">{t(fieldsName + 'fullname')}</InputLabel>
                  <OutlinedInput
                    id="fullName-login"
                    type="fullName"
                    value={values.fullName}
                    name="fullName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={t(fieldsName + 'fullname')}
                    fullWidth
                    error={Boolean(touched.fullName && errors.fullName)}
                  />
                  {touched.fullName && errors.fullName && (
                    <FormHelperText error id="helper-text-fullName-signup">
                      {errors.fullName}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="username-signup">{t(fieldsName + 'username')}</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.username && errors.username)}
                    id="username-signup"
                    type="lastname"
                    value={values.username}
                    name="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={t(fieldsName + 'username')}
                    inputProps={{}}
                  />
                  {touched.username && errors.username && (
                    <FormHelperText error id="helper-text-lastname-signup">
                      {errors.username}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">{t(fieldsName + 'email')}</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={t(fieldsName + 'email')}
                    inputProps={{}}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="phoneNumber-signup">{t(fieldsName + 'phone-number')}</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                    id="phoneNumber-signup"
                    type="lastname"
                    value={values.phoneNumber}
                    name="phoneNumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={t(fieldsName + 'phone-number')}
                    inputProps={{}}
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <FormHelperText error id="helper-text-lastname-signup">
                      {errors.phoneNumber}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={3} >
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    {t(buttonName + 'save')}
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ProfileForm;
