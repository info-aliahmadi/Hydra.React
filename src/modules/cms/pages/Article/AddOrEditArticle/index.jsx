import { useEffect, useState } from 'react';

// material-ui
import {
  Box,
  Avatar,
  FormControl,
  Button,
  ButtonBase,
  Checkbox,
  FormControlLabel,
  Divider,
  FormHelperText,
  InputAdornment,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Tooltip,
  Typography,
  Select,
  MenuItem,
  Chip,
  ButtonGroup
} from '@mui/material';
import { ArrowBack, Save, Delete, Send } from '@mui/icons-material';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { useTranslation } from 'react-i18next';
import Notify from 'components/@extended/Notify';
import ArticlesService from 'modules/cms/services/ArticlesService';
import { useNavigate, useParams } from 'react-router-dom';
import Anonymous from 'assets/images/users/anonymous.png';
import CONFIG from 'config';
import MainCard from 'components/MainCard';
import languageList from 'Localization/languageList';
import DeleteArticle from '../DeleteArticle';
import setServerErrors from 'utils/setServerErrors';
import SelectTopic from '../../Topic/SelectTopic';
import { DatePicker, DateTimePicker } from '@mui/x-date-pickers';

import SunEditor, { buttonList } from 'suneditor-react';
import 'assets/css/suneditor.min.css';
import { setTokenBearer } from 'utils/axiosHeaders';

export default function AddOrEditArticle() {
  const [t, i18n] = useTranslation();
  debugger;
  let isRtl = i18n.dir() == 'rtl' ? true : false;
  const params = useParams();
  const operation = params.operation;
  const id = params.id;
  let articleService = new ArticlesService();
  const [fieldsName, validation, buttonName] = ['fields.article.', 'validation.article.', 'buttons.article.'];
  const [article, setArticle] = useState();
  const [notify, setNotify] = useState({ open: false });
  const [smallThumbPreview, setSmallThumbPreview] = useState();
  const [largeThumbPreview, setLargeThumbPreview] = useState();
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
          setAvatarPreview();
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

  const deleteAvatar = (setFieldValue) => {
    setFieldValue('avatarFile', '');
    setFieldValue('avatar', '');
    setAvatarPreview();
  };
  return (
    <>
      <Notify notify={notify} setNotify={setNotify}></Notify>

      <Formik
        initialValues={{
          id: article?.id,
          subject: article?.subject,
          body: article?.body,
          smallThumbnail: article?.smallThumbnail,
          largeThumbnail: article?.largeThumbnail,
          tags: article?.tags,
          registerDate: article?.registerDate,
          publishDate: article?.publishDate,
          writer: article?.writer,
          editor: article?.editor,
          editDate: article?.editDate,
          isDraft: article?.isDraft,
          topicsIds: article?.topicsIds
        }}
        enableReinitialize={true}
        validationSchema={Yup.object().shape({
          subject: Yup.string()
            .max(400)
            .required(t(validation + 'requiredSubject')),
          body: Yup.string().required(t(validation + 'requiredBody')),
          publishDate: Yup.string().required(t(validation + 'requiredPublishDate')),
          TopicsIds: Yup.array()
            .min(1, t(validation + 'requiredTopics'))
            .required(t(validation + 'requiredTopics'))
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting, resetForm }) => {
          try {
            handleSubmit(values, resetForm, setErrors);
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
              <Grid container item spacing={3} xs={12} sm={12} md={10} lg={10} xl={9} direction="column">
                <Grid item>
                  <Typography variant="h5">{t('pages.cards.article-' + operation)}</Typography>
                </Grid>
                <Grid item>
                  <MainCard>
                    <Grid container item spacing={3} direction="row" justifyContent="flex-start" alignItems="flex-start">
                      <Grid item xs={12} md={12} lg={12} xl={12}>
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
                      <Grid item xs={12} md={12} lg={12} xl={12}>
                        <Stack spacing={1}>
                          <InputLabel htmlFor="name">{t(fieldsName + 'body')}</InputLabel>
                          <SunEditor
                            id="body"
                            name="body"
                            setDefaultStyle={
                              isRtl
                                ? 'font-family :Iran Sans, sans-serif; font-size: 14px'
                                : 'font-family :"Public Sans", sans-serif; font-size: 14px'
                            }
                            defaultValue={values.body || ''}
                            setAllPlugins={true}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={Boolean(touched.body && errors.body)}
                            setOptions={{
                              rtl: isRtl,
                              font: isRtl ? CONFIG.RTL_FONTS_EDITOR : CONFIG.LTR_FONTS_EDITOR,
                              height: 400,
                              imageGalleryUrl: 'https://localhost:7134/cms/GetDriveFiles',
                              imageGalleryHeader: {
                                Authorization: setTokenBearer()
                              },
                              imageUploadHeader: {
                                Authorization: setTokenBearer(),
                                'Content-Type': 'multipart/form-data',
                                accept: '*/*'
                              },
                              imageUploadUrl: 'https://localhost:7134/Cms/AddFileToDrive',
                              minHeight: 200,
                              templates: [
                                {
                                  name: 'Template-1',
                                  html: '<p>HTML source1</p>'
                                },
                                {
                                  name: 'Template-2',
                                  html: '<p>HTML source2</p>'
                                }
                              ],
                              buttonList: [
                                // Default
                                ['undo', 'redo'],
                                ['font', 'fontSize', 'formatBlock'],
                                ['paragraphStyle', 'blockquote'],
                                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                ['fontColor', 'hiliteColor', 'textStyle'],
                                ['removeFormat'],
                                ['outdent', 'indent'],
                                ['align', 'horizontalRule', 'list', 'lineHeight'],
                                ['table', 'link', 'image', 'video', 'audio'],
                                ['imageGallery'],
                                ['fullScreen', 'showBlocks', 'codeView'],
                                ['preview', 'print', 'template'],
                                ['-left', '#fix', 'dir_ltr', 'dir_rtl'],
                                // (min-width:992px)
                                [
                                  '%992',
                                  [
                                    ['undo', 'redo'],
                                    [
                                      ':p-More Paragraph-default.more_paragraph',
                                      'font',
                                      'fontSize',
                                      'formatBlock',
                                      'paragraphStyle',
                                      'blockquote'
                                    ],
                                    ['bold', 'underline', 'italic', 'strike'],
                                    [':t-More Text-default.more_text', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle'],
                                    ['removeFormat'],
                                    ['outdent', 'indent'],
                                    ['align', 'horizontalRule', 'list', 'lineHeight'],
                                    ['-right', 'dir'],
                                    [
                                      '-right',
                                      ':i-More Misc-default.more_vertical',
                                      'fullScreen',
                                      'showBlocks',
                                      'codeView',
                                      'preview',
                                      'print',
                                      'template'
                                    ],
                                    ['-right', ':r-More Rich-default.more_plus', 'table', 'link', 'image', 'video', 'audio', 'imageGallery']
                                  ]
                                ],
                                // (min-width:768px)
                                [
                                  '%768',
                                  [
                                    ['undo', 'redo'],
                                    [
                                      ':p-More Paragraph-default.more_paragraph',
                                      'font',
                                      'fontSize',
                                      'formatBlock',
                                      'paragraphStyle',
                                      'blockquote'
                                    ],
                                    [
                                      ':t-More Text-default.more_text',
                                      'bold',
                                      'underline',
                                      'italic',
                                      'strike',
                                      'subscript',
                                      'superscript',
                                      'fontColor',
                                      'hiliteColor',
                                      'textStyle',
                                      'removeFormat'
                                    ],
                                    [
                                      ':e-More Line-default.more_horizontal',
                                      'outdent',
                                      'indent',
                                      'align',
                                      'horizontalRule',
                                      'list',
                                      'lineHeight'
                                    ],
                                    [':r-More Rich-default.more_plus', 'table', 'link', 'image', 'video', 'audio', 'imageGallery'],
                                    ['-right', 'dir'],
                                    [
                                      '-right',
                                      ':i-More Misc-default.more_vertical',
                                      'fullScreen',
                                      'showBlocks',
                                      'codeView',
                                      'preview',
                                      'print',
                                      'template'
                                    ]
                                  ]
                                ]
                              ]
                              //buttonList: buttonList.formatting // Or Array of button list, eg. [['font', 'align'], ['image']]
                              // plugins: [font] set plugins, all plugins are set by default
                              // Other option
                            }}
                            placeholder={t(fieldsName + 'body')}
                          />

                          {touched.body && errors.body && (
                            <FormHelperText error id="helper-text-body">
                              {errors.body}
                            </FormHelperText>
                          )}
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6} lg={6} xl={4}>
                        <Stack spacing={1}>
                          <InputLabel htmlFor="publishDate">{t(fieldsName + 'publishDate')}</InputLabel>
                          <DateTimePicker
                            name="publishDate"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder={t(fieldsName + 'publishDate')}
                            // value={values.publishDate || ''}
                            clearable
                            slotProps={{
                              actionBar: {
                                actions: ['clear', 'today']
                              }
                            }}
                            error={Boolean(touched.publishDate && errors.publishDate)}
                          />
                          {touched.publishDate && errors.publishDate && (
                            <FormHelperText error id="helper-text-publishDate">
                              {errors.publishDate}
                            </FormHelperText>
                          )}
                        </Stack>
                      </Grid>
                      {/*  <Grid item xs={12} md={2}>
                     <Stack justifyArticle="center" alignItems="center">
                            <Tooltip title={t('tooltips.edit-avatar')} placement="top">
                              <ButtonBase variant="contained" component="label">
                                <input
                                  type="file"
                                  hidden
                                  accept="image/*"
                                  name="avatarFile"
                                  onChange={(e) => changeAvatar(e, setFieldValue)}
                                />
                                <Avatar
                                  alt="profile article"
                                  src={avatarPreview ? avatarPreview : values.avatar ? CONFIG.AVATAR_BASEPATH + values.avatar : Anonymous}
                                  sx={{ width: 85, height: 85 }}
                                ></Avatar>
                              </ButtonBase>
                            </Tooltip>
                            <ButtonGroup variant="outlined" color="secondary" size="small" aria-label="outlined button group">
                              {(avatarPreview || values.avatar) && (
                                <Tooltip title={t('tooltips.delete-avatar')}>
                                  <Button onClick={() => deleteAvatar(setFieldValue)}>
                                    <Delete />
                                  </Button>
                                </Tooltip>
                              )}
                              <Tooltip title={t('tooltips.edit-avatar')}>
                                <Button>
                                  <ButtonBase variant="contained" component="label">
                                    <input
                                      type="file"
                                      hidden
                                      accept="image/*"
                                      name="avatarFile"
                                      onChange={(e) => changeAvatar(e, setFieldValue)}
                                    />
                                    <Edit />
                                  </ButtonBase>
                                </Button>
                              </Tooltip>
                            </ButtonGroup>
                          </Stack>
                        </Grid> */}
                      {operation == 'edit' && (
                        <Grid item xs={12} md={6} lg={6} xl={4}>
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
                      <Grid container spacing={3} item>
                        <Grid item xs={12} md={6} lg={6} xl={4}>
                          <Stack spacing={1}>
                            <InputLabel htmlFor="roleIds">{t(fieldsName + 'topicsIds')}</InputLabel>
                            <SelectTopic
                              defaultValues={values?.roleIds || []}
                              id={'roleIds'}
                              setFieldValue={setFieldValue}
                              error={Boolean(touched.roleIds && errors.roleIds)}
                            />
                            {touched.roleIds && errors.roleIds && (
                              <FormHelperText error id="helper-roleIds">
                                {errors.roleIds}
                              </FormHelperText>
                            )}
                          </Stack>
                        </Grid>
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
                                disa
                                disabled={isSubmitting}
                                size="large"
                                type="submit"
                                variant="contained"
                                color="primary"
                                startIcon={<Send />}
                              >
                                {operation == 'edit' ? t(buttonName + 'save') : t(buttonName + 'publish')}
                              </Button>
                            </AnimateButton>
                            <AnimateButton>
                              <Button
                                disa
                                disabled={isSubmitting}
                                size="large"
                                type="submit"
                                variant="contained"
                                color="warning"
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
