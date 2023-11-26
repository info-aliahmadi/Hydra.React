// material-ui
import { Box, Button, Chip, Grid, Typography } from '@mui/material';

// project import
import { useTranslation } from 'react-i18next';
import { Inbox, Feed } from '@mui/icons-material';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { RestoreFromTrash, Send } from '@mui/icons-material';

import MainCard from 'components/MainCard';
import TableCard from 'components/TableCard';
import MessagesPrivateInboxDataGrid from './MessagesPrivateInboxDataGrid';
import MessagesPublicInboxDataGrid from './MessagesPublicInboxDataGrid';

import { useNavigate } from 'react-router-dom';
// ===============================|| COLOR BOX ||=============================== //

function MessagesInbox() {
  const [t] = useTranslation();
  let navigate = useNavigate();
  const [value, setValue] = useState('1');

  const buttonName = 'buttons.message.messageInbox.';

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const MessageHeader = () => {
    return (
      <Grid container item direction="row" justifyContent="space-between" alignItems="center">
        <Grid item>
          {
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                navigate('/message/new');
              }}
              startIcon={<Send />}
            >
              {t(buttonName + 'send')}
            </Button>
          }
        </Grid>
        <Grid item>
          <Chip
            href="/MessagesTrashList"
            clickable
            component="a"
            target="_blank"
            icon={<RestoreFromTrash />}
            title={t('pages.messagesTrash')}
            label={t(buttonName + 'trash')}
            variant="outlined"
            size="medium"
            color="error"
            sx={{ borderRadius: '16px' }}
          />
        </Grid>
      </Grid>
    );
  };
  return (
    <>
      <Grid container justifyContent="center" direction="row" alignItems="flex-start">
        <Grid container spacing={3} item xs={12} sm={12} md={12} lg={12} direction="column">
          <Grid item>
            <Typography variant="h5">{t('pages.messagesInbox')}</Typography>
          </Grid>
          <Grid item>
            <MainCard title={<MessageHeader />}>
              <TableCard>
                <Box sx={{ width: '100%', typography: 'body1' }} mt={-2}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab icon={<Inbox />} value="1" iconPosition="start" label="Private" />
                        <Tab icon={<Feed />} value="2" iconPosition="start" label="Public" />
                      </TabList>
                    </Box>
                    <TabPanel value="1" sx={{ p: '0' }}>
                      <MessagesPrivateInboxDataGrid />
                    </TabPanel>
                    <TabPanel value="2" sx={{ p: '0' }}>
                      <MessagesPublicInboxDataGrid />
                    </TabPanel>
                  </TabContext>
                </Box>
              </TableCard>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MessagesInbox;
