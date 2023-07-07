import { useEffect, useState } from 'react';

// material-ui
import {
  Avatar,
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Tooltip,
  Typography
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { useTranslation } from 'react-i18next';
import Notify from 'components/@extended/Notify';
import UsersService from 'modules/auth/services/Users/UsersService';
import { useParams } from 'react-router-dom';
import Anonymous from 'assets/images/users/anonymous.png';
import CONFIG from 'config';
import MainCard from 'components/MainCard';

export default function AddOrEditUser() {
  const [t] = useTranslation();
  const params = useParams();
  let userService = new UsersService();
  const [fieldsName, validation, buttonName] = ['fields.user.', 'validation.user.', 'buttons.user.'];
  const [user, setUser] = useState();
  const [notify, setNotify] = useState({ open: false });
  const [avatarPreview, setAvatarPreview] = useState();

  const loadUser = () => {
    userService.getUserById(params.id).then((result) => {
      setUser(result);
    });
  };
  useEffect(() => {
    if (params.operation == 'edit' && params.id > 0) loadUser();
  }, [params]);

  const onClose = () => {
    setOpen(false);
    setUser({});
  };

  const handleSubmit = (user) => {
    debugger;
    if (params.operation == 'add') {
      userService
        .addUser(user)
        .then(() => {
          onClose();
          setNotify({ open: true });
          refetch();
        })
        .catch((error) => {
          setNotify({ open: true, type: 'error', description: error.message });
        });
    } else {
      userService
        .updateUser(user)
        .then(() => {
          onClose();
          setNotify({ open: true });
          refetch();
        })
        .catch((error) => {
          setNotify({ open: true, type: 'error', description: error.message });
        });
    }
    setUser({});
  };
  const CloseDialog = () => (
    <IconButton
      aria-label="close"
      onClick={onClose}
      sx={{
        position: 'absolute',
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500]
      }}
    >
      <CloseIcon />
    </IconButton>
  );

  return (
    <>
      <Notify notify={notify} setNotify={setNotify}></Notify>

      <Formik
        initialValues={{
          id: user?.id,
          name: user?.name,
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
            .required(t(validation + 'required-username')),
          email: Yup.string()
            .email(t(validation + 'valid-email'))
            .max(255)
            .required(t(validation + 'required-email'))
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: true });
            setSubmitting(true);
            handleSubmit(values);
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
            <Grid container justifyContent="center" direction="row" alignItems="flex-start">
              <Grid container spacing={3} item xs={12} sm={12} md={6} lg={6} direction="column">
                <Grid item>
                  <Typography variant="h5">{t('pages.cards.user-' + params.operation)}</Typography>
                </Grid>
                <Grid item>
                  <MainCard title={t('pages.cards.user-profile')}>
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
                                  ></Avatar>
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
                            <InputLabel htmlFor="name">{t(fieldsName + 'name')}</InputLabel>
                            <OutlinedInput
                              id="name"
                              type="text"
                              value={values.name}
                              name="name"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              placeholder={t(fieldsName + 'name')}
                              fullWidth
                              error={Boolean(touched.name && errors.name)}
                            />
                            {touched.name && errors.name && (
                              <FormHelperText error id="helper-text-name">
                                {errors.name}
                              </FormHelperText>
                            )}
                          </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Stack spacing={1}>
                            <InputLabel htmlFor="userName">{t(fieldsName + 'userName')}</InputLabel>
                            <OutlinedInput
                              fullWidth
                              error={Boolean(touched.userName && errors.userName)}
                              id="userName"
                              type="lastname"
                              value={values.userName}
                              name="userName"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              placeholder={t(fieldsName + 'userName')}
                              inputProps={{}}
                            />
                            {touched.userName && errors.userName && (
                              <FormHelperText error id="helper-text-lastname">
                                {errors.userName}
                              </FormHelperText>
                            )}
                          </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Stack spacing={1}>
                            <InputLabel htmlFor="email">{t(fieldsName + 'email')}</InputLabel>
                            <OutlinedInput
                              fullWidth
                              error={Boolean(touched.email && errors.email)}
                              id="email"
                              type="email"
                              value={values.email}
                              name="email"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              placeholder={t(fieldsName + 'email')}
                              inputProps={{}}
                            />
                            {touched.email && errors.email && (
                              <FormHelperText error id="helper-text-email">
                                {errors.email}
                              </FormHelperText>
                            )}
                          </Stack>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Stack spacing={1}>
                            <InputLabel htmlFor="phoneNumber">{t(fieldsName + 'phoneNumber')}</InputLabel>
                            <OutlinedInput
                              fullWidth
                              error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                              id="phoneNumber"
                              type="lastname"
                              value={values.phoneNumber}
                              name="phoneNumber"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              placeholder={t(fieldsName + 'phone-number')}
                              inputProps={{}}
                            />
                            {touched.phoneNumber && errors.phoneNumber && (
                              <FormHelperText error id="helper-text-phoneNumber">
                                {errors.phoneNumber}
                              </FormHelperText>
                            )}
                          </Stack> 
                        </Grid>
                        <Grid item xs={12} md={12}>
                        <Divider textAlign="left">{t('pages.cards.user-security')}</Divider>
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
                    </Grid>
                  </MainCard>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}
