import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextareaAutosize
} from '@mui/material';
import 'react';
import SquareIcon from '@mui/icons-material/Square';
import CircleIcon from '@mui/icons-material/Circle';
import Notify from 'components/@extended/Notify';
import { Formik } from 'formik';
import MessagesService from 'modules/crm/services/MessagesService';
import { useState } from 'react';
import * as Yup from 'yup';
import setServerErrors from 'utils/setServerErrors';

export default function ContactForm() {
  let messageService = new MessagesService();
  const [message, setMessage] = useState();
  const [notify, setNotify] = useState({ open: false });

  const handleSubmit = async (message, resetForm, setErrors, setSubmitting) => {
    debugger;
    if (message.messageType == 2) {
      messageService
        .sendContactMessage(message)
        .then(() => {
          resetForm();
          setSubmitting(true);
          setNotify({ open: true, description: 'Your Message Sent Successfully' });
        })
        .catch((error) => {
          setServerErrors(error, setErrors);
          setNotify({ open: true, type: 'error', description: 'Your message could not be sent, please send your message via email' });
        })
        .finally((x) => {
          setSubmitting(false);
        });
    } else {
      messageService
        .sendRequestMessage(message)
        .then(() => {
          resetForm();
          setSubmitting(true);
          setNotify({ open: true, description: 'Your Message Sent Successfully' });
        })
        .catch((error) => {
          setServerErrors(error, setErrors);
          setNotify({ open: true, type: 'error', description: 'Your message could not be sent, please send your message via email' });
        })
        .finally((x) => {
          setSubmitting(false);
        });
    }
  };

  return (
    <>
      <Notify notify={notify} setNotify={setNotify} sx={{ mt: '55px' }}></Notify>

      <Formik
        initialValues={{
          name: message?.name,
          family: message?.family,
          email: message?.email,
          subject: message?.subject,
          messageType: message?.messageType,
          knowing: message?.knowing,
          content: message?.content,
          acceptTerms: message?.acceptTerms
        }}
        enableReinitialize={true}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(250).required('Name Is Required'),
          email: Yup.string().email().required('Email Is Required'),
          subject: Yup.string().max(250).required('Please select Your Requirement'),
          messageType: Yup.number().required('Please Select Your Subject Message'),
          knowing: Yup.string().required('Please Select How much do you know about technolog'),
          content: Yup.string().min(5).max(5000).required('Message Is Required')
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
            <Grid container spacing={3}>
              <Grid item container xs={12}>
                <Grid item xs={5}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <OutlinedInput
                      id="name"
                      name="name"
                      type="text"
                      value={values?.name || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder={'name'}
                      fullWidth
                      error={Boolean(touched.name && errors.name)}
                    />
                    {touched.name && errors.name && (
                      <FormHelperText error id="helper-text-subject">
                        {errors.name}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={7}>
                  <Stack spacing={1} pl={5}>
                    <InputLabel htmlFor="family">Family</InputLabel>
                    <OutlinedInput
                      id="family"
                      name="family"
                      type="text"
                      value={values?.family || ''}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder={'family'}
                      fullWidth
                    />
                  </Stack>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <OutlinedInput
                    id="email"
                    name="email"
                    type="text"
                    value={values?.email || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Email"
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-subject">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email">Subject</InputLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    id="messageType"
                    name="messageType"
                    value={values?.messageType || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.messageType && errors.messageType)}
                  >
                    <FormControlLabel value="2" control={<Radio icon={<CircleIcon />} />} label="Consult" />
                    <FormControlLabel value="3" control={<Radio icon={<CircleIcon />} />} label="Requirement" />
                  </RadioGroup>
                  {touched.messageType && errors.messageType && (
                    <FormHelperText error id="helper-text-subject">
                      {errors.messageType}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="subject">Your Requirement</InputLabel>
                  <Select
                    labelId="subject"
                    id="subject"
                    name="subject"
                    value={values?.subject || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.subject && errors.subject)}
                  >
                    {/* value={age} label="Age" onChange={handleChange} */}
                    <MenuItem value={'Porfolio/News/Gallery'}>Porfolio/News/Gallery</MenuItem>
                    <MenuItem value={'E-Commerce/Shop'}>E-Commerce/Shop</MenuItem>
                    <MenuItem value={'Custom Web Application'}>Custom Web Application</MenuItem>
                  </Select>
                  {touched.subject && errors.subject && (
                    <FormHelperText error id="error-requirement">
                      {errors.subject}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="knowing">How much do you know about technology?</InputLabel>
                  <RadioGroup
                    id="knowing"
                    name="knowing"
                    value={values?.knowing || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-labelledby="demo-radio-buttons-group-label"
                    error={Boolean(touched.knowing && errors.knowing)}
                    // row={4}
                  >
                    <FormControlLabel value="I am a Developer" control={<Radio icon={<CircleIcon />} />} label="I am a Developer" />
                    <FormControlLabel
                      value="I am familiar with technology"
                      control={<Radio icon={<CircleIcon />} />}
                      label="I am familiar with technology"
                    />
                    <FormControlLabel
                      value="I know some basic facts about technology"
                      control={<Radio icon={<CircleIcon />} />}
                      label="I know some basic facts about technology"
                    />
                    <FormControlLabel
                      value="I know very little about technology"
                      control={<Radio icon={<CircleIcon />} />}
                      label="I know very little about technology"
                    />
                  </RadioGroup>
                  {touched.knowing && errors.knowing && (
                    <FormHelperText error id="error-requirement">
                      {errors.knowing}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="content">Message</InputLabel>
                  <TextareaAutosize
                    className={'MuiTextareaAutosize-root ' + (Boolean(touched.content && errors.content) == true ? 'Mui-error' : '')}
                    fullWidth
                    id="content"
                    name="content"
                    type="text"
                    value={values?.content || ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Message"
                    multiline={true}
                    minRows={8}
                    inputProps={{}}
                    error={Boolean(touched.content && errors.content)}
                  />
                  {touched.content && errors.content && (
                    <FormHelperText error id="helper-text-content">
                      {errors.content}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="acceptTerms"
                        color="primary"
                        required
                        size="medium"
                        onChange={handleChange}
                        checked={values?.acceptTerms || true}
                        icon={<SquareIcon />}
                        defaultChecked
                      />
                    }
                    label={
                      <>
                        <span>I accept </span>
                        <Link href="/termsofservice" color={'warning'} target="_blank">
                          the Terms
                        </Link>
                      </>
                    }
                  />
                </Stack>
              </Grid>
              <Grid item xs={4} sm={4} md={3} lg={2} xl={2}>
                <Stack spacing={1}>
                  <Button variant="contained" color="primary" size="large" type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}
