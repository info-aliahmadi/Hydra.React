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
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Tooltip
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

const AddOrEditUser = ({ userId, isNew, open, setOpen, refetch }) => {
  const [t] = useTranslation();
  let userService = new UsersService();
  const [fieldsName, validation, buttonName] = ['fields.user.', 'validation.user.', 'buttons.user.'];
  const [user, setUser] = useState();
  const [notify, setNotify] = useState({ open: false });

  const loadUser = () => {
    userService.getUserById(userId).then((result) => {
      setUser(result);
    });
  };
  useEffect(() => {
    if (isNew == false && userId > 0) loadUser();
  }, [userId, isNew, open]);

  const onClose = () => {
    setOpen(false);
    setUser({});
  };

  const handleSubmit = (user) => {
    debugger;
    if (isNew == true) {
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
      <Dialog open={open} fullWidth={true}>
        <Formik
          initialValues={{
            id: user?.id,
            fullName: user?.fullName,
            userName: user?.userName,
            phoneNumber: user?.phoneNumber,
            email: user?.email,
            avatar: user?.avatar,
            avatarFile: user?.avatarFile
          }}
          enableReinitialize={true}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .max(255)
              .required(t(validation + 'required-user-name')),
            normalizedName: Yup.string().max(255, t(validation + 'maxlength-user-normalizedname'))
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
              <DialogTitle>
                {t('dialog.' + (isNew == true ? 'add' : 'edit') + '.title', { item: 'User' })}
                <CloseDialog />
              </DialogTitle>
              <DialogContent>
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
                </Grid>
              </DialogContent>
              <DialogActions sx={{ p: '1.25rem' }}>
                <AnimateButton>
                  <Button onClick={onClose}>Cancel</Button>
                </AnimateButton>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    {t(buttonName + (isNew == true ? 'add' : 'edit'))}
                  </Button>
                </AnimateButton>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </>
  );
};

export default AddOrEditUser;
