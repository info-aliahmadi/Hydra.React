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
import SlideshowService from 'modules/cms/services/SlideshowsService';
import setServerErrors from 'utils/setServerErrors';
import ImageUpload from 'modules/shared/FileUpload/ImageUpload';

const AddOrEditSlideshow = ({ row, isNew, open, setOpen, refetch }) => {
  const [t] = useTranslation();
  let slideshowService = new SlideshowService();
  const [fieldsName, validation, buttonName] = ['fields.slideshow.', 'validation.slideshow.', 'buttons.slideshow.'];
  const [slideshow, setSlideshow] = useState();
  const [notify, setNotify] = useState({ open: false });
  const [orders, setOrders] = useState();

  const loadSlideshow = () => {
    slideshowService.getSlideshowById(row?.original?.id).then((result) => {
      setSlideshow(result);
    });
  };
  const onClose = () => {
    setOpen(false);
    setSlideshow({});
  };
  useEffect(() => {
    if (isNew == false && row?.original?.id > 0) {
      loadSlideshow();
    } else {
      setSlideshow({});
    }
  }, [row, isNew, open]);

  const handleSubmit = (slideshow, setErrors) => {
    if (isNew == true) {
      slideshowService
        .addSlideshow(slideshow)
        .then(() => {
          setSlideshow({});
          onClose();
          setNotify({ open: true });
          refetch();
        })
        .catch((error) => {
          setNotify({ open: true, type: 'error', description: error });
          setServerErrors(error, setErrors);
        });
    } else {
      slideshowService
        .updateSlideshow(slideshow)
        .then(() => {
          setSlideshow({});
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
            id: slideshow?.id,
            header: slideshow?.header,
            description: slideshow?.description,
            previewImageId: slideshow?.previewImageId,
            previewImageUrl: slideshow?.previewImageUrl
          }}
          enableReinitialize={true}
          validationSchema={Yup.object().shape({
            header: Yup.string()
              .max(255)
              .required(t(validation + 'requiredSlideshowheader'))
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
                  ? t('dialog.slideshow.add', { parentTitle: '"' + row?.original?.title + '"' })
                  : t('dialog.edit.title', { item: 'Slideshow' })}
                <CloseDialog />
              </DialogTitle>
              <DialogContent>
                <Grid container spacing={3} direction="column">
                  <Grid item>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="header">{t(fieldsName + 'header')}</InputLabel>
                      <OutlinedInput
                        id="header"
                        type="text"
                        value={values.header || ''}
                        name="header"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder={t(fieldsName + 'header')}
                        fullWidth
                        error={Boolean(touched.header && errors.header)}
                      />
                      {touched.header && errors.header && (
                        <FormHelperText error id="helper-text-title">
                          {errors.header}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="description">{t(fieldsName + 'description')}</InputLabel>
                      <OutlinedInput
                        id="description"
                        type="text"
                        value={values.description || ''}
                        name="description"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder={t(fieldsName + 'description')}
                        fullWidth
                        multiline={true}
                        error={Boolean(touched.description && errors.description)}
                      />
                      {touched.description && errors.description && (
                        <FormHelperText error id="helper-text-title">
                          {errors.description}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="previewImageId">{t(fieldsName + 'previewImage')}</InputLabel>
                      <ImageUpload
                        key={'previewImageId' + values?.previewImageId || 'new'}
                        id="previewImageId"
                        setFieldValue={setFieldValue}
                        value={values?.previewImageId || ''}
                        filePosterMaxHeight={400}
                      />
                      {(values?.previewImageId == null || values?.previewImageId == '') && (
                        <OutlinedInput
                          id="previewImageUrl"
                          type="text"
                          value={values.previewImageUrl || ''}
                          name="previewImageUrl"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder={t(fieldsName + 'previewImageUrl')}
                          fullWidth
                          error={Boolean(touched.previewImageUrl && errors.previewImageUrl)}
                        />
                      )}
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

export default AddOrEditSlideshow;
