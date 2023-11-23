// material-ui
import { Box, Button, Chip, Grid, IconButton, Link, Tooltip, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import TableCard from 'components/TableCard';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'modules/shared/MaterialTable/MaterialTable';
import MessagesService from 'modules/crm/services/MessagesService';
import { Delete, RestoreFromTrash, PostAddOutlined, PushPin } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import DeleteMessage from '../DeleteMessage';
import Notify from 'components/@extended/Notify';
import MessageTypeChip from '../MessagesTrashList/MessageTypeChip';
// ===============================|| COLOR BOX ||=============================== //

function MessagesInboxDataGrid() {
  const [t, i18n] = useTranslation();

  const [openDelete, setOpenDelete] = useState(false);
  const [row, setRow] = useState({});
  const [refetch, setRefetch] = useState();
  const [notify, setNotify] = useState({ open: false });

  const messagesService = new MessagesService();

  const navigate = useNavigate();

  const [fieldsName, buttonName] = ['fields.messageInbox.', 'buttons.messageInbox.'];

  const columns = useMemo(
    () => [
      {
        accessorKey: 'messageType',
        header: t(fieldsName + 'messageType'),
        enableClickToCopy: true,
        type: 'string',
        enableResizing: true,
        Cell: ({ renderedCellValue }) => <MessageTypeChip messageType={renderedCellValue} />
      },
      {
        accessorKey: 'from',
        header: t(fieldsName + 'from'),
        enableClickToCopy: true,
        type: 'string',
        enableResizing: true,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            {row.fromUserId ? (
              <Link href={'/sendMessage/' + row.fromUser.id}>{row.fromUser.UserName}</Link>
            ) : (
              <Link href={'/sendEmail/' + row.email} title={row.email}>
                {row.name ? row.name : row.email}
              </Link>
            )}
          </Box>
        )
      },
      {
        accessorKey: 'subject',
        header: t(fieldsName + 'subject'),
        enableClickToCopy: true,
        type: 'string',
        enableResizing: true,
        Cell: ({ renderedCellValue, row }) => (
          <Typography variant={row.toUser.isRead ? 'body1' : 'body2'}>
            <Link href={'/message/view/' + row.id}>{renderedCellValue}</Link>
          </Typography>
        )
      },

      {
        accessorKey: 'registerDate',
        header: t(fieldsName + 'registerDate'),
        type: 'dateTime'
      }
    ],
    []
  );
  const handleDeleteRow = (row) => {
    setRow(row);
    setOpenDelete(true);
  };
  const handleRefetch = () => {
    setRefetch(Date.now());
  };

  const handlePinRow = (messageId) => {
    messagesService
      .pinMessage(messageId)
      .then(() => {
        handleRefetch();
      })
      .catch((error) => {
        setNotify({ open: true, type: 'error', description: error });
      });
  };
  const handleMessageList = useCallback(async (filters) => {
    return await messagesService.getInboxMessages(filters);
  }, []);
  const AddRow = useCallback(
    () => (
      <>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            navigate('/message/new');
          }}
          startIcon={<PostAddOutlined />}
        >
          {t(buttonName + 'send')}
        </Button>
        {/* <Button
          color="primary"
          variant="contained"
          onClick={() => {
            navigate('/message/new');
          }}
          startIcon={<PostAddOutlined />}
        >
          {t(buttonName + 'send')}
        </Button> */}
      </>
    ),
    []
  );
  const DeleteOrPin = useCallback(
    ({ row }) => (
      <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'nowrap' }}>
        <Tooltip arrow placement="top-start" title={t('buttons.delete')}>
          <IconButton color="error" onClick={() => handleDeleteRow(row)}>
            <Delete />
          </IconButton>
        </Tooltip>
        {/* <Tooltip arrow placement="top-start" title={t('buttons.edit')}>
          <IconButton
            onClick={() => {
              navigate('/message/edit/' + row.original.id);
            }}
          >
            <Edit />
          </IconButton>
        </Tooltip> */}
        <Tooltip arrow placement="top-start" title={t('buttons.pin')}>
          <IconButton onClick={() => handlePinRow(row.original.id)} color={row.original.isPinned ? 'warning' : 'secondary'}>
            <PushPin />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    []
  );

  const MessageHeader = ({ title }) => {
    return (
      <Grid container item direction="row" justifyContent="space-between" alignItems="center">
        <Grid item>{title}</Grid>
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
      <Notify notify={notify} setNotify={setNotify}></Notify>
      <MainCard title={<MessageHeader title={t('pages.cards.messages-list')} />}>
        <TableCard>
          <MaterialTable
            refetch={refetch}
            columns={columns}
            dataApi={handleMessageList}
            enableRowActions={true}
            renderRowActions={DeleteOrPin}
            renderTopToolbarCustomActions={AddRow}
            displayColumnDefOptions={{
              'mrt-row-actions': {
                //header: 'Change Account Settings', //change header text
                size: 80 //make actions column wider
              }
            }}
          />
        </TableCard>
      </MainCard>
      <DeleteMessage row={row} open={openDelete} setOpen={setOpenDelete} refetch={handleRefetch} />
    </>
  );
}

export default MessagesInboxDataGrid;
