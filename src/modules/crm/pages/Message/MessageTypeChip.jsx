import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
// ===============================|| COLOR BOX ||=============================== //

function MessageTypeChip({ messageTypeId }) {
  const [t] = useTranslation();
  const fieldsName = 'fields.message.messageInbox.messageType.';
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
        return 'private';
      case 1:
        return 'public';
      case 2:
        return 'contact';
      case 3:
        return 'request';
      default:
        return 'default';
    }
  }
  return (
    <Chip
      color={renderColor(messageTypeId)}
      label={t(fieldsName + renderTitle(messageTypeId))}
      sx={{ borderRadius: '16px' }}
      variant="filled"
      size="medium"
    />
  );
}

export default MessageTypeChip;
