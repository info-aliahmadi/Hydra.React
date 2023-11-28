// material-ui
import { Chip, Link } from '@mui/material';

// project import
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'components/MaterialTable/MaterialTable';
import MessagesService from 'modules/crm/services/MessagesService';
import { AttachFile } from '@mui/icons-material';
import Notify from 'components/@extended/Notify';
import { MessageTypes } from '../MessageType';

function MessagesPublicInboxDataGrid() {
  const [t] = useTranslation();

  const [refetch, setRefetch] = useState();
  const [notify, setNotify] = useState({ open: false });

  const messagesService = new MessagesService();

  const fieldsName = 'fields.message.messageInbox.';

  const columns = useMemo(
    () => [
      {
        accessorKey: 'messageType',
        header: t(fieldsName + 'messageType.messageType'),
        enableClickToCopy: true,
        type: 'number',
        enableResizing: true,
        size: 50,
        filterVariant: 'select',
        filterSelectOptions: MessageTypes.filter((x) => x.id == 1).map((a) => ({
          value: a.id,
          text: t('fields.message.messageInbox.messageType.' + a.title)
        })),
        Cell: () => (
          <Chip color="success" label={t(fieldsName + 'messageType.public')} sx={{ borderRadius: '16px' }} variant="filled" size="medium" />
        )
      },
      {
        accessorKey: 'subject',
        header: t(fieldsName + 'subject'),
        enableClickToCopy: false,
        type: 'string',
        enableResizing: true,
        Cell: ({ renderedCellValue, row }) => (
          <Link href={'/message/inbox/view/' + row.original.id} underline="none" variant="subtitle1" display="block">
            {renderedCellValue}
            {row.original.haveAttachment && <AttachFile fontSize="medium" sx={{ verticalAlign: 'middle' }} />}
          </Link>
        )
      },
      {
        accessorKey: 'fromUser',
        header: t(fieldsName + 'fromUser'),
        enableClickToCopy: false,
        type: 'string',
        enableResizing: true,
        maxSize: 100,
        Cell: ({ renderedCellValue, row }) => (
          <Link
            href={'/message/inbox/view/' + row.original.id}
            underline="none"
            title={renderedCellValue.email}
            variant="subtitle1"
            display="block"
          >
            {renderedCellValue.name}
          </Link>
        )
      },
      {
        accessorKey: 'registerDate',
        header: t(fieldsName + 'registerDate'),
        type: 'dateTime',
        maxSize: 60
      }
    ],
    []
  );

  const handleMessageList = useCallback(async (filters) => {
    return await messagesService.getPublicInboxMessages(filters);
  }, []);

  return (
    <>
      <Notify notify={notify} setNotify={setNotify}></Notify>
      <MaterialTable refetch={refetch} columns={columns} dataApi={handleMessageList} defaultDensity="compact" enableRowActions={false} />
    </>
  );
}

export default MessagesPublicInboxDataGrid;
