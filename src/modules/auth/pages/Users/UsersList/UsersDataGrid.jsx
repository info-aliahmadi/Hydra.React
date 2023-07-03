// material-ui
import { Avatar, Box, Button, Checkbox, IconButton, ListItemIcon, MenuItem, Tooltip, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import TableCard from 'components/TableCard';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'components/MaterialTable/MaterialTable';
import UsersService from 'modules/auth/services/Users/UsersService';
import { AccountCircle, Delete, Send } from '@mui/icons-material';
import { Edit } from '@mui/icons-material';
import AddOrEditUser from '../AddOrEditUser';
import DeleteUser from '../DeleteUser';
import Anonymous from 'assets/images/users/anonymous.png';
import CONFIG from 'config';
// ===============================|| COLOR BOX ||=============================== //

function UsersDataGrid() {
  const [t] = useTranslation();
  const service = new UsersService();
  const [isNew, setIsNew] = useState(true);
  const [rowId, setRowId] = useState(0);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [row, setRow] = useState({});
  const [refetch, setRefetch] = useState();
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        enableClickToCopy: true,
        type: 'string',
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Avatar
              loading="lazy"
              alt="profile user"
              src={row.original.avatar ? CONFIG.AVATAR_BASEPATH + row.original.avatar : Anonymous}
              sx={{ width: 40, height: 40 }}
            ></Avatar>
            {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
            <span>{renderedCellValue}</span>
          </Box>
        )
        // filterVariant: 'text' | 'select' | 'multi-select' | 'range' | 'range-slider' | 'checkbox',
      },
      {
        accessorKey: 'userName',
        header: 'UserName',
        enableClickToCopy: true,
        type: 'string',
        enableResizing: true
      },
      {
        accessorKey: 'email',
        header: 'Email',
        enableClickToCopy: true,
        type: 'string',
        enableResizing: true
      },
      {
        accessorKey: 'emailConfirmed',
        header: 'Email Confirmed',
        type: 'boolean',
        enableResizing: true,
        Cell: ({ renderedCellValue }) =>
          renderedCellValue != null && <Checkbox checked={renderedCellValue ? true : false} color="success" />
      },
      {
        accessorKey: 'phoneNumber',
        header: 'PhoneNumber',
        type: 'string',
        enableResizing: true
      },
      {
        accessorKey: 'phoneNumberConfirmed',
        header: 'PhoneNumber Confirmed',
        type: 'boolean'
      },
      {
        accessorKey: 'lockoutEnabled',
        header: 'Lockout Enabled',
        type: 'boolean'
      },
      {
        accessorKey: 'dob',
        header: 'Register Date',
        type: 'date'
      },
      {
        accessorKey: 'lockoutEnd',
        header: 'Lockout End',
        type: 'string'
      },
      {
        accessorKey: 'accessFailedCount',
        header: 'Access Failed Count',
        type: 'number'
      }
    ],
    []
  );

  const handleNewRow = () => {
    setIsNew(true);
    setRowId(0);
    setOpen(true);
  };
  const handleEditRow = (row) => {
    let userId = row.original.id;
    setIsNew(false);
    setRowId(userId);
    setOpen(true);
  };
  const handleDeleteRow = (row) => {
    setRow(row);
    setOpenDelete(true);
  };
  const handleRefetch = () => {
    setRefetch(Date.now());
  };

  const handleUserList = useCallback(async (filters) => {
    return await service.getUserList(filters);
  }, []);
  const AddRow = useCallback(
    () => (
      <Button color="primary" onClick={handleNewRow} variant="contained">
        {t('buttons.user.add')}
      </Button>
    ),
    []
  );
  const RowActionMenuItems = useCallback(
    ({ closeMenu }) => [
      <MenuItem
        key={0}
        onClick={() => {
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        View Profile
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={() => {
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Send />
        </ListItemIcon>
        Send Email
      </MenuItem>
    ],
    []
  );
  const DeleteOrEdit = useCallback(
    ({ row }) => (
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip arrow placement="top-start" title="Delete">
          <IconButton color="error" onClick={() => handleDeleteRow(row)}>
            <Delete />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top-start" title="Edit">
          <IconButton onClick={() => handleEditRow(row)}>
            <Edit />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    []
  );
  return (
    <>
      <MainCard title={t('pages.cards.users-list')} codeHighlight>
        <TableCard>
          <MaterialTable
            refetch={refetch}
            columns={columns}
            dataApi={handleUserList}
            enableRowActions
            renderTopToolbarCustomActions={AddRow}
            renderRowActionMenuItems={RowActionMenuItems}
            // renderDetailPanel={({ row }) => <PermissionUserDataGrid row={row} />}
          />
        </TableCard>
      </MainCard>
      <AddOrEditUser isNew={isNew} userId={rowId} open={open} setOpen={setOpen} refetch={handleRefetch} />
      <DeleteUser row={row} open={openDelete} setOpen={setOpenDelete} refetch={handleRefetch} />
    </>
  );
}

export default UsersDataGrid;
