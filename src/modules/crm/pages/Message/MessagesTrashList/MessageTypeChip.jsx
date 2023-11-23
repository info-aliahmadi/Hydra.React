// material-ui
import { Chip, Grid, Typography } from '@mui/material';

// project import
import MessageTrashDataGrid from './MessagesTashDataGrid';
import { useTranslation } from 'react-i18next';
// ===============================|| COLOR BOX ||=============================== //

function MessageTypeChip({ messageType }) {
  const [t] = useTranslation();
  const fieldsName = 'fields.messageInbox.messageType.messageType.';
  function renderColor(m) {
    switch (m) {
      case 0:
        return 'primary';
      case 1:
        return 'secondary';
      case 2:
        return 'warning';
      case 3:
        return 'success';
      default:
        return 'default';
    }
  }
  function renderTitle(m) {
    switch (m) {
      case 0:
        return t(fieldsName + 'private');
      case 1:
        return t(fieldsName + 'public');
      case 2:
        return t(fieldsName + 'contact');
      case 3:
        return t(fieldsName + 'request');
      default:
        return 'default';
    }
  }
  return <Chip color={renderColor(messageType)}>{renderTitle(messageType)}</Chip>;
}

export default MessageTypeChip;
