import { useEffect, useState } from 'react';
import { Button, Chip, Grid, InputLabel, Link, OutlinedInput, Stack, Typography } from '@mui/material';
import { ArrowBack, Reply, EventNote, Person } from '@mui/icons-material';

import AnimateButton from 'components/@extended/AnimateButton';

import { useTranslation } from 'react-i18next';
import Notify from 'components/@extended/Notify';
import MessagesService from 'modules/crm/services/MessagesService';
import { useNavigate, useParams } from 'react-router-dom';
import MainCard from 'components/MainCard';

import FileUpload from 'modules/shared/FileUpload/FileUpload';
import MessageTypeChip from '../MessageTypeChip';
import CONFIG from 'config';
import moment from 'moment';

export default function ViewMessage() {
  const [t, i18n] = useTranslation();
  const params = useParams();
  const id = params.id;

  let messageService = new MessagesService();
  const [fieldsName, buttonName] = ['fields.message.messageInbox.', 'buttons.message.messageInbox.'];
  const [message, setMessage] = useState();
  const [notify, setNotify] = useState({ open: false });
  const navigate = useNavigate();

  const loadMessage = () => {
    messageService.getMessageByIdForReceiver(id).then((result) => {
      setMessage(result);
    });
  };
  useEffect(() => {
    if (id > 0) loadMessage();
  }, [id]);

  return (
    <>
      <Notify notify={notify} setNotify={setNotify}></Notify>

      <Grid container justifyContent="center" direction="row" alignItems="flex-start" key={message}>
        <Grid container item spacing={3} xs={12} sm={12} md={12} lg={12} xl={12} direction="column">
          <Grid item>
            <Typography variant="h5">{t(fieldsName + 'viewMessage')}</Typography>
          </Grid>
          <Grid item>
            <MainCard>
              <Grid container item spacing={3} direction="row" justifyContent="flex-start" alignItems="flex-start">
                <Grid container item spacing={3} xs={12} sm={12} md={12} lg={12} xl={8}>
                  <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="fromUser">{t(fieldsName + 'fromUser')}</InputLabel>
                      <Link display="block">
                        <Chip
                          icon={<Person />}
                          title={t(fieldsName + 'fromUser')}
                          label={message?.fromUserId > 0 ? message?.fromUser?.userName : message?.name + '(' + message?.email + ')'}
                          variant="filled"
                          size="medium"
                          sx={{ borderRadius: '16px' }}
                        />
                      </Link>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={12} md={2} lg={2} xl={2} p={0} mt={3}>
                    <Stack spacing={1}>
                      <MessageTypeChip messageTypeId={message?.messageType} />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="subject">{t(fieldsName + 'subject')}</InputLabel>
                      <OutlinedInput
                        id="subject"
                        name="subject"
                        type="text"
                        value={message?.subject || ''}
                        placeholder={t(fieldsName + 'subject')}
                        fullWidth
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Stack spacing={1}>
                      <div className="MuiOutlinedvid-notchedOutline" dangerouslySetInnerHTML={{ __html: message?.content }} />
                      <Grid>
                        <Chip
                          icon={<EventNote />}
                          title={t(fieldsName + 'registerDate')}
                          label={new Intl.DateTimeFormat(i18n.language, {
                            dateStyle: [CONFIG.DATE_STYLE],
                            timeStyle: [CONFIG.TIME_STYLE],
                            hour12: false
                          }).format(moment(message?.registerDate))}
                          variant="filled"
                          size="small"
                          sx={{ borderRadius: '16px' }}
                        />
                      </Grid>
                    </Stack>
                  </Grid>
                </Grid>
                <Grid container item spacing={3} xs={12} sm={12} md={12} lg={12} xl={4} justifyContent="flex-start" alignItems="flex-start">
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="attachments">{t(fieldsName + 'attachments')}</InputLabel>
                      <FileUpload
                        id="attachments"
                        name="attachments"
                        value={message?.attachments || []}
                        allowMultiple={true}
                        disabled={true}
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
                            navigate('/message/inbox');
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
                          size="large"
                          type="submit"
                          variant="contained"
                          color="info"
                          onClick={() => setFieldValue('isDraft', false)}
                          startIcon={<Reply />}
                        >
                          {t(buttonName + 'reply')}
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
    </>
  );
}
