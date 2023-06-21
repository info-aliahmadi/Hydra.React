import styled from '@emotion/styled';
import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Notify(props) {
  const Strong = styled.strong`
    font-weight: 900;
    margin: auto 5px;
  `;
  const [open, setOpen] = useState();
  const [t] = useTranslation();

  useEffect(() => {
    setOpen(props.notify.open);
  }, [props.notify.open]);

  const handleClose = (event, reason) => {
    props.setNotify({ ...props.notify, open: false });
  };

  return (
    <>
      <Snackbar
        {...props}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        // autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={props.notify.type ? props.notify.type : 'success'}
          variant="filled"
          sx={{ width: '100%' }}
          data-i18n="[html]content.body"
        >
          <Strong>
            {props.notify.title ? t(props.notify.title) : props.notify.type == 'error' ? t('alert.error') : t('alert.success')}
          </Strong>

          {props.notify.description
            ? t(props.notify.description)
            : props.notify.type == 'error'
            ? t('alert.error-description')
            : t('alert.success-description')}
        </Alert>
      </Snackbar>
    </>
  );
}
