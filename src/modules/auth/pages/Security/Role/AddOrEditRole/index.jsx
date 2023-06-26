import { useEffect, useState } from 'react';

// material-ui
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { useTranslation } from 'react-i18next';
import Notify from 'components/@extended/Notify';
import RoleService from 'modules/auth/services/Security/RoleService';
// ============================|| FIREBASE - REGISTER ||============================ //

const AddOrEditRole = ({ roleId, isNew, refetch, open, setOpen }) => {
  const [t] = useTranslation();
  let roleService = new RoleService();
  const [fieldsName, validation, buttonName] = ['fields.role.', 'validation.role.', 'buttons.role.'];
  const [role, setRole] = useState();
  const [notify, setNotify] = useState({ open: false });

  const loadRole = () => {
    roleService.getRoleById(roleId).then((result) => {
      setRole(result);
    });
  };
  const onClose = () => {
    setOpen(false);
    setRole({});
  };
  useEffect(() => {
    if (isNew == false && roleId > 0) loadRole();
  }, [roleId]);

  const handleSubmit = (role) => {
    if (isNew == true) {
      roleService
        .addRole(role)
        .then(() => {
          onClose();
          setNotify({ open: true });
          // refetch();
        })
        .catch((error) => {
          setNotify({ open: true, type: 'error', description: error.message });
        });
    } else {
      roleService
        .updateRole(role)
        .then(() => {
          onClose();
          setNotify({ open: true });
          // refetch();
        })
        .catch((error) => {
          setNotify({ open: true, type: 'error', description: error.message });
        });
    }
    setRole({});
  };
  return (
    <>
      <Notify notify={notify} setNotify={setNotify}></Notify>
      <Dialog open={open}>
        <Formik
          initialValues={{
            id: role?.id,
            name: role?.name,
            normalizedName: role?.normalizedName
          }}
          enableReinitialize={true}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .max(255)
              .required(t(validation + 'required-role-name')),
            normalizedName: Yup.string().max(255, t(validation + 'maxlength-role-normalizedname'))
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
              <DialogTitle textAlign="center">{t(buttonName + (isNew == true ? 'add' : 'edit'))}</DialogTitle>
              <DialogContent>
                <Grid container spacing={3} direction="column">
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
                        <InputLabel htmlFor="normalizedName">{t(fieldsName + 'normalizedname')}</InputLabel>
                        <OutlinedInput
                          fullWidth
                          error={Boolean(touched.normalizedName && errors.normalizedName)}
                          id="normalizedName"
                          type="text"
                          value={values.normalizedName}
                          name="normalizedName"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder={t(fieldsName + 'normalizedname')}
                          inputProps={{}}
                        />
                        {touched.normalizedName && errors.normalizedName && (
                          <FormHelperText error id="helper-text-normalizedName">
                            {errors.normalizedName}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                  </Grid>
                  <Grid container item spacing={3} justifyContent="center" alignItems="center" direction="row">
                    <Grid item xs={12} sm={6} md={3}></Grid>
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

export default AddOrEditRole;
