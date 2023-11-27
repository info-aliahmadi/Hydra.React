import { useEffect, useState } from 'react';
import { Button, Checkbox, FormControlLabel, FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import { ArrowBack, Save, Send } from '@mui/icons-material';
import * as Yup from 'yup';
import { Formik } from 'formik';

import AnimateButton from 'components/@extended/AnimateButton';

import { useTranslation } from 'react-i18next';
import Notify from 'components/@extended/Notify';
import MessagesService from 'modules/crm/services/MessagesService';
import { useNavigate, useParams } from 'react-router-dom';
import MainCard from 'components/MainCard';
import setServerErrors from 'utils/setServerErrors';

import Editor from 'modules/shared/Editor/Editor';
import FileUpload from 'modules/shared/FileUpload/FileUpload';
import SelectUser from 'modules/auth/pages/Shared/SelectUser';

export default function SendMessage() {
  const [t] = useTranslation();
  const params = useParams();
  const operation = params.operation;
  const toUserId = params.toUser;
  const id = params.id;

  let messageService = new MessagesService();
  const [fieldsName, validation, buttonName] = ['fields.message.messageInbox.', 'validation.message.', 'buttons.message.messageInbox.'];
  const [message, setMessage] = useState();
  const [isPublicMessage, setIsPublicMessage] = useState(false);
  const [notify, setNotify] = useState({ open: false });
  const navigate = useNavigate();

  const loadMessage = () => {
    messageService.getMessageByIdForSender(id).then((result) => {
      setMessage(result);
    });
  };
  useEffect(() => {
    if (operation == 'edit' && id > 0) loadMessage();
  }, [operation, id]);

  const handleSubmit = async (message, resetForm, setErrors, setSubmitting) => {
    debugger;
    if (!message.isDraft) {
      if (isPublicMessage) {
        message.userIds = [];
        messageService
          .sendPublicMessage(message)
          .then(() => {
            if (operation == 'new') {
              resetForm();
              setSubmitting(true);
            }
            setNotify({ open: true });
          })
          .catch((error) => {
            setServerErrors(error, setErrors);
            setNotify({ open: true, type: 'error', description: error });
          })
          .finally((x) => {});
      } else {
        messageService
          .sendPrivateMessage(message)
          .then(() => {
            if (operation == 'new') {
              resetForm();
              setSubmitting(true);
            }
            setNotify({ open: true });
          })
          .catch((error) => {
            setServerErrors(error, setErrors);
            setNotify({ open: true, type: 'error', description: error });
          })
          .finally((x) => {
            // setSubmitting(false);
          });
      }
    } else {
      messageService
        .saveDraftMessage(message)
        .then((result) => {
          resetForm();
          setNotify({ open: true });
        })
        .catch((error) => {
          setServerErrors(error, setErrors);
          setNotify({ open: true, type: 'error', description: error });
        })
        .finally((x) => {
          setSubmitting(false);
        });
    }
  };

  return (
    <>
      <Notify notify={notify} setNotify={setNotify}></Notify>

      <Formik
        initialValues={{
          id: message?.id,
          subject: message?.subject,
          content: message?.content,
          registerDate: message?.registerDate,
          isDraft: message?.isDraft,
          toUserIds: message?.toUserIds,
          attachments: message?.attachments
        }}
        enableReinitialize={true}
        validationSchema={Yup.object().shape({
          subject: Yup.string()
            .max(250)
            .required(t(validation + 'requiredSubject')),
          toUserIds: !isPublicMessage
            ? Yup.array()
                .min(1, t(validation + 'requiredUserIds'))
                .required(t(validation + 'requiredUserIds'))
            : Yup.array().optional()
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting, resetForm }) => {
          try {
            setSubmitting(true);
            handleSubmit(values, resetForm, setErrors, setSubmitting);
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
              <Grid container item spacing={3} xs={12} sm={12} md={12} lg={12} xl={12} direction="column">
                <Grid item>
                  <Typography variant="h5">{t('pages.cards.sendMessage')}</Typography>
                </Grid>
                <Grid item>
                  <MainCard>
                    <Grid container item spacing={3} direction="row" justifyContent="flex-start" alignItems="flex-start">
                      <Grid container item spacing={3} xs={12} sm={12} md={12} lg={12} xl={8} display={''}>
                        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                          <Stack spacing={1}>
                            <InputLabel htmlFor="toUserIds">{t(fieldsName + 'toUserIds')}</InputLabel>
                            <SelectUser
                              id="toUserIds"
                              name="toUserIds"
                              multiple={true}
                              disabled={isPublicMessage}
                              setFieldValue={setFieldValue}
                              defaultValues={operation == 'edit' ? values?.toUserIds || [] : toUserId > 0 ? [toUserId] : []}
                              error={Boolean(touched.toUserIds && errors.toUserIds)}
                            />
                            {touched.toUserIds && errors.toUserIds && (
                              <FormHelperText error id="helper-text-subject">
                                {errors.toUserIds}
                              </FormHelperText>
                            )}
                          </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} lg={2} xl={2} p={0} mt={3}>
                          <Stack spacing={1}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  id="publicMessageType"
                                  checked={isPublicMessage}
                                  title={'Send To All Users'}
                                  color="default"
                                  size="large"
                                  onChange={() => setIsPublicMessage(!isPublicMessage)}
                                />
                              }
                              label={t(fieldsName + 'publicMessageType')}
                            />
                          </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Stack spacing={1}>
                            <InputLabel htmlFor="subject">{t(fieldsName + 'subject')}</InputLabel>
                            <OutlinedInput
                              id="subject"
                              name="subject"
                              type="text"
                              value={values?.subject || ''}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              placeholder={t(fieldsName + 'subject')}
                              fullWidth
                              error={Boolean(touched.subject && errors.subject)}
                            />
                            {touched.subject && errors.subject && (
                              <FormHelperText error id="helper-text-subject">
                                {errors.subject}
                              </FormHelperText>
                            )}
                          </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Stack spacing={1}>
                            <InputLabel htmlFor="content">{t(fieldsName + 'content')}</InputLabel>
                            <Editor
                              id="content"
                              name="content"
                              defaultValue={values?.content || ''}
                              setFieldValue={setFieldValue}
                              error={Boolean(touched.content && errors.content)}
                            />
                            {touched.content && errors.content && (
                              <FormHelperText error id="content">
                                {errors.content}
                              </FormHelperText>
                            )}
                          </Stack>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        spacing={3}
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={4}
                        justifyContent="flex-start"
                        alignItems="flex-start"
                      >
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={12}>
                          <Stack spacing={1}>
                            <InputLabel htmlFor="attachments">{t(fieldsName + 'attachments')}</InputLabel>
                            <FileUpload
                              id="attachments"
                              name="attachments"
                              setFieldValue={setFieldValue}
                              value={values?.attachments || ''}
                              allowMultiple={true}
                            />
                          </Stack>
                        </Grid>
                      </Grid>
                      <Grid container item spacing={3} direction="row" justifyContent="space-between" alignItems="center">
                        <Grid item>
                          <Stack direction="row" spacing={2}>
                            <AnimateButton>
                              <Button
                                size="large"
                                onClick={() => {
                                  navigate(-1);
                                }}
                                variant="outlined"
                                color="secondary"
                                startIcon={<ArrowBack />}
                              >
                                {t('buttons.back')}
                              </Button>
                            </AnimateButton>
                            <AnimateButton>
                              <Button
                                disabled={isSubmitting}
                                size="large"
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={() => setFieldValue('isDraft', false)}
                                startIcon={<Send />}
                              >
                                {t(buttonName + 'send')}
                              </Button>
                            </AnimateButton>
                            <AnimateButton>
                              <Button
                                disabled={isSubmitting}
                                size="large"
                                type="submit"
                                variant="contained"
                                color="warning"
                                onClick={() => setFieldValue('isDraft', true)}
                                startIcon={<Save />}
                              >
                                {t(buttonName + 'draft')}
                              </Button>
                            </AnimateButton>
                          </Stack>
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
