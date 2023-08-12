import { useEffect, useState } from 'react';

// material-ui
import { Button, FormHelperText, Grid, InputLabel, Link, OutlinedInput, Stack, Typography } from '@mui/material';
import { ArrowBack, Save, Delete, Send } from '@mui/icons-material';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { useTranslation } from 'react-i18next';
import Notify from 'components/@extended/Notify';
import ArticlesService from 'modules/cms/services/ArticlesService';
import { useNavigate, useParams } from 'react-router-dom';
import CONFIG from 'config';
import MainCard from 'components/MainCard';
import DeleteArticle from '../DeleteArticle';
import setServerErrors from 'utils/setServerErrors';
import SelectTopic from '../../Topic/SelectTopic';

import ImageUpload from 'components/FileUpload/ImageUpload';
import Editor from 'components/Editor/Editor';
import SelectTag from '../../Tags/SelectTag';
import DateTimeInput from 'components/DateTime/DateTimeInput';
import moment from 'moment';

export default function AddOrEditArticle() {
  const [t, i18n] = useTranslation();
  const params = useParams();
  const operation = params.operation;
  const id = params.id;

  let articleService = new ArticlesService();
  const [fieldsName, validation, buttonName] = ['fields.article.', 'validation.article.', 'buttons.article.'];
  const [article, setArticle] = useState();
  const [notify, setNotify] = useState({ open: false });
  const [openDelete, setOpenDelete] = useState(false);
  const navigate = useNavigate();

  const loadArticle = () => {
    articleService.getArticleById(id).then((result) => {
      setArticle(result);
    });
  };
  useEffect(() => {
    if (operation == 'edit' && id > 0) loadArticle();
  }, [operation, id]);

  const handleSubmit = (article, resetForm, setErrors) => {
    if (operation == 'add') {
      articleService
        .addArticle(article)
        .then(() => {
          resetForm();
          setNotify({ open: true });
        })
        .catch((error) => {
          setServerErrors(error, setErrors);
          setNotify({ open: true, type: 'error', description: error });
        });
    } else {
      articleService
        .updateArticle(article)
        .then((result) => {
          setArticle(result);
          setNotify({ open: true });
        })
        .catch((error) => {
          setServerErrors(error, setErrors);
          setNotify({ open: true, type: 'error', description: error });
        });
    }
  };

  return (
    <>
      <Notify notify={notify} setNotify={setNotify}></Notify>

      <Formik
        initialValues={{
          id: article?.id,
          subject: article?.subject,
          body: article?.body,
          registerDate: article?.registerDate,
          publishDate: article?.publishDate,
          writer: article?.writer,
          editor: article?.editor,
          editDate: article?.editDate,
          isDraft: article?.isDraft,
          previewImageId: article?.previewImageId,
          previewImageUrl: article?.previewImageUrl,
          topicsIds: article?.topicsIds,
          tags: article?.tags
        }}
        enableReinitialize={true}
        validationSchema={Yup.object().shape({
          subject: Yup.string()
            .max(400)
            .required(t(validation + 'requiredSubject')),
          body: Yup.string().required(t(validation + 'requiredBody')),
          publishDate: Yup.string().required(t(validation + 'requiredPublishDate')),
          topicsIds: Yup.array()
            .min(1, t(validation + 'requiredTopics'))
            .required(t(validation + 'requiredTopics'))
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting, resetForm }) => {
          try {
            handleSubmit(values, resetForm, setErrors);
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
            <Grid container justifyContent="center" direction="row" alignItems="flex-start">
              <Grid container item spacing={3} xs={12} sm={12} md={12} lg={12} xl={12} direction="column">
                <Grid item>
                  <Typography variant="h5">{t('pages.cards.article-' + operation)}</Typography>
                </Grid>
                <Grid item>
                  <MainCard>
                    <Grid container item spacing={3} direction="row" justifyContent="flex-start" alignItems="flex-start">
                      <Grid container item spacing={3} xs={12} sm={12} md={12} lg={12} xl={8} display={''}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Stack spacing={1}>
                            <InputLabel htmlFor="subject">{t(fieldsName + 'subject')}</InputLabel>
                            <OutlinedInput
                              id="subject"
                              type="subject"
                              value={values.subject || ''}
                              name="subject"
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
                            <InputLabel htmlFor="body">{t(fieldsName + 'body')}</InputLabel>
                            <Editor
                              id={'body'}
                              name={'body'}
                              defaultValue={values?.body || ''}
                              setFieldValue={setFieldValue}
                              error={Boolean(touched.body && errors.body)}
                            />
                            {touched.body && errors.body && (
                              <FormHelperText error id="helper-text-body">
                                {errors.body}
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
                            <InputLabel htmlFor="imagePreview">{t(fieldsName + 'imagePreview')}</InputLabel>
                            <ImageUpload
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
                        <Grid
                          container
                          item
                          spacing={3}
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                          xl={12}
                          justifyContent="flex-start"
                          alignItems="flex-start"
                        >
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Stack spacing={1}>
                              <InputLabel htmlFor="topicsIds">{t(fieldsName + 'topicsIds')}</InputLabel>
                              <SelectTopic
                                defaultValues={values?.topicsIds || []}
                                id="topicsIds"
                                name="topicsIds"
                                setFieldValue={setFieldValue}
                                error={Boolean(touched.topicsIds && errors.topicsIds)}
                              />
                              {touched.topicsIds && errors.topicsIds && (
                                <FormHelperText error id="helper-roleIds">
                                  {errors.topicsIds}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Stack spacing={1}>
                              <InputLabel htmlFor="tags">
                                {t(fieldsName + 'tags')}
                                <Link href="/tagsList" target="_blank">
                                  {' '}
                                  (Manage Tags)
                                </Link>
                              </InputLabel>
                              <SelectTag
                                defaultValues={values?.tags || []}
                                id="tags"
                                name="tags"
                                setFieldValue={setFieldValue}
                                error={Boolean(touched.tags && errors.tags)}
                              />
                              {touched.tags && errors.tags && (
                                <FormHelperText error id="helper-tagIds">
                                  {errors.tags}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3} item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                          <Stack spacing={1}>
                            <InputLabel htmlFor="publishDate">{t(fieldsName + 'publishDate')}</InputLabel>
                            <DateTimeInput
                              id="publishDate"
                              name="publishDate"
                              setFieldValue={setFieldValue}
                              placeholder={t(fieldsName + 'publishDate')}
                              defaultValue={values?.publishDate || ''}
                              error={Boolean(touched.publishDate && errors.publishDate)}
                            />
                            {touched.publishDate && errors.publishDate && (
                              <FormHelperText error id="helper-text-publishDate">
                                {errors.publishDate}
                              </FormHelperText>
                            )}
                          </Stack>
                        </Grid>
                        {operation == 'edit' && (
                          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Stack spacing={1}>
                              <InputLabel htmlFor="registerDate">{t(fieldsName + 'registerDate')}</InputLabel>
                              <OutlinedInput
                                id="registerDate"
                                type="text"
                                value={
                                  values.registerDate
                                    ? new Intl.DateTimeFormat(i18n.language, {
                                        dateStyle: 'long',
                                        timeStyle: [CONFIG.TIME_STYLE],
                                        hour12: false
                                      }).format(moment(values.registerDate))
                                    : ''
                                }
                                fullWidth
                                disabled
                              />
                            </Stack>
                            <Stack spacing={1}>
                              <InputLabel htmlFor="registerDate">{t(fieldsName + 'editDate')}</InputLabel>
                              <OutlinedInput
                                id="editDate"
                                type="text"
                                value={
                                  values.editDate
                                    ? new Intl.DateTimeFormat(i18n.language, {
                                        dateStyle: 'long',
                                        timeStyle: [CONFIG.TIME_STYLE],
                                        hour12: false
                                      }).format(moment(values.editDate))
                                    : ''
                                }
                                fullWidth
                                disabled
                              />
                            </Stack>
                          </Grid>
                        )}
                      </Grid>
                      <Grid container item spacing={3} direction="row" justifyContent="space-between" alignItems="center">
                        <Grid item>
                          <Stack direction="row" spacing={2}>
                            {' '}
                            <AnimateButton>
                              <Button
                                size="large"
                                onClick={() => {
                                  navigate('/articlesList');
                                }}
                                variant="outlined"
                                color="secondary"
                                startIcon={<ArrowBack />}
                              >
                                {t('buttons.cancel')}
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
                                {operation == 'edit' ? t(buttonName + 'save') : t(buttonName + 'publish')}
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
                        <Grid item>
                          {operation == 'edit' && (
                            <AnimateButton>
                              <Button
                                size="large"
                                variant="contained"
                                color="error"
                                startIcon={<Delete />}
                                on
                                onClick={() => setOpenDelete(true)}
                              >
                                {t(buttonName + 'delete')}
                              </Button>
                            </AnimateButton>
                          )}
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
      {operation == 'edit' && <DeleteArticle open={openDelete} setOpen={setOpenDelete} articleId={id} />}
    </>
  );
}
