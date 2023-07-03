import styled from '@emotion/styled';
import { Alert, Snackbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Notify({ notify, setNotify }) {
  const Strong = styled.strong`
    font-weight: 900;
    margin: auto 5px;
  `;
  const [open, setOpen] = useState();
  const [t] = useTranslation();

  let description = notify.type == 'error' ? t('notification.error-description') : t('notification.success-description');
  if (notify.type === 'error' && notify.description) {
    if (notify.description?.response?.data?.message) {
      description = notify.description?.response?.data?.message;
    } else {
      description = notify.description;
    }
  }

  useEffect(() => {
    setOpen(notify.open);
  }, [notify.open]);

  const handleClose = (event, reason) => {
    setNotify({ ...notify, open: false });
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        // autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={notify.type ? notify.type : 'success'}
          variant="filled"
          sx={{ width: '100%' }}
          data-i18n="[html]content.body"
        >
          <Typography variant="h5">
            <Strong>{notify.title ? t(notify.title) : notify.type == 'error' ? t('notification.error') : t('notification.success')}</Strong>
          </Typography>
          <Typography variant="h6">{description}</Typography>
        </Alert>
      </Snackbar>
    </>
  );
}
export default React.memo(Notify);
