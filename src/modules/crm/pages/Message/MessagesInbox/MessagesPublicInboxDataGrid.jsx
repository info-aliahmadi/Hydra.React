// material-ui
import { Box, Chip, IconButton, Link, Tooltip } from '@mui/material';

// project import
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'modules/shared/MaterialTable/MaterialTable';
import MessagesService from 'modules/crm/services/MessagesService';
import { Delete, PushPin } from '@mui/icons-material';
import DeleteMessage from '../DeleteMessage';
import Notify from 'components/@extended/Notify';

function MessagesPublicInboxDataGrid() {
  const [t] = useTranslation();

  const [openDelete, setOpenDelete] = useState(false);
  const [row, setRow] = useState({});
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
        type: 'string',
        enableResizing: true,
        size: 50,
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
          <Link href={'/message/view/' + row.original.id} underline="none" variant="subtitle1" display="block">
            {renderedCellValue}
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
            href={'/message/view/' + row.original.id}
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
