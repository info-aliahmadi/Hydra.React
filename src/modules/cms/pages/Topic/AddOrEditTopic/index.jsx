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
import TopicService from 'modules/cms/services/TopicService';
import setServerErrors from 'utils/setServerErrors';

const AddOrEditTopic = ({ topicId, isNew, open, setOpen, refetch }) => {
  const [t] = useTranslation();
  let topicService = new TopicService();
  const [fieldsName, validation, buttonName] = ['fields.topic.', 'validation.topic.', 'buttons.topic.'];
  const [topic, setTopic] = useState();
  const [notify, setNotify] = useState({ open: false });

  const loadTopic = () => {
    topicService.getTopicById(topicId).then((result) => {
      setTopic(result);
    });
  };
  const onClose = () => {
    setOpen(false);
    setTopic({});
  };
  useEffect(() => {
    if (isNew == false && topicId > 0) {
      loadTopic();
    } else {
      setTopic({});
    }
  }, [topicId, isNew, open]);

  const handleSubmit = (topic, setErrors) => {
    if (isNew == true) {
      topicService
        .addTopic(topic)
        .then(() => {
          setTopic({});
          onClose();
          setNotify({ open: true });
          refetch();
        })
        .catch((error) => {
          setNotify({ open: true, type: 'error', description: error });
          setServerErrors(error, setErrors);
        });
    } else {
      topicService
        .updateTopic(topic)
        .then(() => {
          setTopic({});
          onClose();
          setNotify({ open: true });
          refetch();
        })
        .catch((error) => {
          // debugger;
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
      <Dialog open={open} fullWidth={'xs'}>
        <Formik
          initialValues={{
            id: topic?.id,
            title: topic?.title
          }}
          enableReinitialize={true}
          validationSchema={Yup.object().shape({
            title: Yup.string()
              .max(255)
              .required(t(validation + 'required-topic-name'))
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              // setStatus({ success: true });
              // setSubmitting(true);
              handleSubmit(values, setErrors);
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
              <DialogTitle>
                {t('dialog.' + (isNew == true ? 'add' : 'edit') + '.title', { item: 'Topic' })}
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

export default AddOrEditTopic;
