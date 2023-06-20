import { useEffect, useState } from 'react';

// material-ui
import {
  Alert,
  Avatar,
  Button,
  ButtonBase,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Snackbar,
  Stack,
  Tooltip
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { useTranslation } from 'react-i18next';
import AccountService from 'modules/auth/services/Account/AccountService';
import AuthenticationService from 'modules/auth/services/Authentication/AuthenticationService';
import CONFIG from 'config';
import Anonymous from 'assets/images/users/anonymous.png';
import Notify from 'components/@extended/Notify';
// ============================|| FIREBASE - REGISTER ||============================ //

const ProfileForm = () => {
  const [t] = useTranslation();
  const [avatarPreview, setAvatarPreview] = useState();
  let accountService = new AccountService();

  const [fieldsName, validation, buttonName] = ['fields.', 'validation.', 'buttons.'];
  const [user, setUser] = useState();
  const [notify, setNotify] = useState({ open: false });

  // const handleClose = (event, reason) => {
  //   // if (reason === 'clickaway') {
  //   //   return;
  //   // }
  //   setOpen(false);
  // };

  const loadUser = () => {
    accountService.getCurrentUser().then((userData) => {
      setUser(userData);
    });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleUpdate = (user) => {
    accountService
      .updateCurrentUser(user)
      .then(() => {
        let authenticationService = new AuthenticationService();
        authenticationService.refreshToken();
        setNotify({ open: true });
      })
      .catch((error) => {
        setNotify({ open: true, type: 'error', description: error.message });
      });
  };
  return (
    <>
      <Notify notify={notify} setNotify={setNotify}></Notify>
      <Formik
        initialValues={{
          fullName: user?.fullName,
          userName: user?.userName,
          phoneNumber: user?.phoneNumber,
          email: user?.email,
          avatar: user?.avatar,
          avatarFile: user?.avatarFile
        }}
        enableReinitialize={true}
        validationSchema={Yup.object().shape({
          userName: Yup.string()
            .max(255)
            .required(t(validation + 'requireduserName')),
          email: Yup.string()
            .email(t(validation + 'valid-email'))
            .max(255)
            .required(t(validation + 'required-email'))
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            handleUpdate(values);
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
        {({ errors, handleBlur, handleChange, setFieldValue, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3} direction="column">
              <Grid container item spacing={0} direction="row" justifyContent="flex-end" alignItems="flex-start">
                <Grid item xs={12} md={2}>
                  <Tooltip title={t('tooltips.edit-avatar')}>
                    <Stack>
                      <ButtonBase variant="contained" component="label">
                        <input
                          type="file"
                          hidden
                          accept="image/*"
                          name="avatarFile"
                          onChange={(e) => {
                            const fileReader = new FileReader();
                            fileReader.readAsDataURL(e.target.files[0]);
                            fileReader.onload = () => {
                              if (fileReader.readyState === 2) {
                                setFieldValue('avatarFile', fileReader.result);
                                setAvatarPreview(fileReader.result);
                              }
                            };
                          }}
                        />
                        <div
                          style={{
                            position: 'relative'
                          }}
                        >
                          <Avatar
                            alt="profile user"
                            src={avatarPreview ? avatarPreview : values.avatar ? CONFIG.AVATAR_BASEPATH + values.avatar : Anonymous}
                            sx={{ width: 85, height: 85 }}
                          ></Avatar>{' '}
                          <span
                            style={{
                              background: 'rgb(0 0 0 / 40%)',
                              position: 'absolute',
                              width: '100%',
                              textAlign: 'center',
                              bottom: '30px'
                            }}
                          >
                            {t('buttons.edit')}
                          </span>
                        </div>
                      </ButtonBase>
                    </Stack>
                  </Tooltip>
                </Grid>
              </Grid>
              <Grid container item spacing={3} justifyContent="center">
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
                    <InputLabel htmlFor="userName-signup">{t(fieldsName + 'userName')}</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.userName && errors.userName)}
                      id="userName-signup"
                      type="lastname"
                      value={values.userName}
                      name="userName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder={t(fieldsName + 'userName')}
                      inputProps={{}}
                    />
                    {touched.userName && errors.userName && (
                      <FormHelperText error id="helper-text-lastname-signup">
                        {errors.userName}
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
              </Grid>
              <Grid container item spacing={3} justifyContent="center" alignItems="center" direction="row">
                <Grid item xs={12} sm={6} md={3}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      {t(buttonName + 'save')}
                    </Button>
                  </AnimateButton>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ProfileForm;
