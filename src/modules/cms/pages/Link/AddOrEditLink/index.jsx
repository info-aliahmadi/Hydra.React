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
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { useTranslation } from 'react-i18next';
import Notify from 'components/@extended/Notify';
import LinkService from 'modules/cms/services/LinkService';
import setServerErrors from 'utils/setServerErrors';
import ImageUpload from 'modules/shared/FileUpload/ImageUpload';

const AddOrEditLink = ({ row, isNew, open, setOpen, refetch }) => {
  const [t] = useTranslation();
  let linkService = new LinkService();
  const [fieldsName, validation, buttonName] = ['fields.link.', 'validation.link.', 'buttons.link.'];
  const [link, setLink] = useState();
  const [notify, setNotify] = useState({ open: false });

  const loadLink = () => {
    linkService.getLinkById(row?.original?.id).then((result) => {
      setLink(result);
    });
  };
  const onClose = () => {
    setOpen(false);
    setLink({});
  };
  useEffect(() => {
    if (isNew == false && row?.original?.id > 0) {
      loadLink();
    } else {
      setLink({});
    }
  }, [row, isNew, open]);

  const handleSubmit = (link, setErrors) => {
    if (isNew == true) {
      linkService
        .addLink(link)
        .then(() => {
          setLink({});
          onClose();
          setNotify({ open: true });
          refetch();
        })
        .catch((error) => {
          setNotify({ open: true, type: 'error', description: error });
          setServerErrors(error, setErrors);
        });
    } else {
      linkService
        .updateLink(link)
        .then(() => {
          setLink({});
          onClose();
          setNotify({ open: true });
          refetch();
        })
        .catch((error) => {
          setNotify({ open: true, type: 'error', description: error });
          setServerErrors(error, setErrors);
        });
    }
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
            id: link?.id,
            title: link?.title,
            url: link?.url,
            previewImageId: link?.previewImageId,
            parentId: row?.original?.id > 0 && isNew == true ? row?.original?.id : link?.parentId
          }}
          enableReinitialize={true}
          validationSchema={Yup.object().shape({
            title: Yup.string()
              .max(255)
              .required(t(validation + 'requiredLinkTitle')),
            url: Yup.string()
              .max(255)
              .required(t(validation + 'requiredLinkUrl'))
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              handleSubmit(values, setErrors);
            } catch (err) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({ errors, handleBlur, handleChange, setFieldValue, handleSubmit, isSubmitting, touched, values }) => (
            <form noValidate onSubmit={handleSubmit}>
              <DialogTitle>
                {isNew == true
                  ? row
                    ? t('dialog.link.addSub', { parentTitle: '"' + row?.original?.title + '"' })
                    : t('dialog.link.addMain', { item: 'Link' })
                  : t('dialog.edit.title', { item: 'Link' })}
                <CloseDialog />
              </DialogTitle>
              <DialogContent>
                <Grid container spacing={3} direction="column">
                  <Grid item>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="title">{t(fieldsName + 'title')}</InputLabel>
                      <OutlinedInput
                        id="title"
                        type="text"
                        value={values.title || ''}
                        name="title"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder={t(fieldsName + 'title')}
                        fullWidth
                        error={Boolean(touched.title && errors.title)}
                      />
                      {touched.title && errors.title && (
                        <FormHelperText error id="helper-text-title">
                          {errors.title}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="url">{t(fieldsName + 'url')}</InputLabel>
                      <OutlinedInput
                        id="url"
                        type="text"
                        value={values.url || ''}
                        name="url"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder={t(fieldsName + 'url')}
                        fullWidth
                        error={Boolean(touched.url && errors.url)}
                      />
                      {touched.url && errors.url && (
                        <FormHelperText error id="helper-text-url">
                          {errors.url}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="url">{t(fieldsName + 'url')}</InputLabel>
                      <ImageUpload
                        id="previewImageId"
                        setFieldValue={setFieldValue}
                        value={values?.previewImageId || ''}
                        filePosterMaxHeight={400}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions sx={{ p: '1.25rem' }}>
                <AnimateButton>
                  <Button onClick={onClose}>Cancel</Button>
                </AnimateButton>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                  >
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

export default AddOrEditLink;
