import { useState } from 'react';

// material-ui
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// assets
import { useTranslation } from 'react-i18next';
import Notify from 'components/@extended/Notify';
import RoleService from 'modules/auth/services/RoleService';

const DeleteRole = ({ row, open, setOpen, refetch }) => {
  const [t] = useTranslation();
  let roleService = new RoleService();
  const [notify, setNotify] = useState({ open: false });

  const onClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    let roleId = row.getValue('id');
    roleService
      .deleteRole(roleId)
      .then(() => {
        onClose();
        setNotify({ open: true });
        refetch();
      })
      .catch((error) => {
        setNotify({ open: true, type: 'error', description: error.message });
      });
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
      <Dialog open={open} onClose={onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h3"> {t('buttons.role.delete')}</Typography>
          <CloseDialog />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="h4"> {t('dialog.delete.description')}</Typography>
          </DialogContentText>
          {/* <Typography variant="h3">{t('alert.delete.item')}</Typography> */}
        </DialogContent>
        <DialogActions sx={{ p: '1.25rem' }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button disableElevation onClick={handleSubmit} size="large" variant="contained" color="error">
            {t('buttons.delete')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteRole;
