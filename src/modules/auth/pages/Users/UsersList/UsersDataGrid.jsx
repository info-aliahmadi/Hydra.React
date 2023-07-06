// material-ui
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  ListItemIcon,
  MenuItem,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import TableCard from 'components/TableCard';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'components/MaterialTable/MaterialTable';
import UsersService from 'modules/auth/services/Users/UsersService';
import { AccountCircle, Delete, Send, Clear } from '@mui/icons-material';
import { Edit } from '@mui/icons-material';
import AddOrEditUser from '../AddOrEditUser';
import DeleteUser from '../DeleteUser';
import Anonymous from 'assets/images/users/anonymous.png';
import CONFIG from 'config';
import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
// ===============================|| COLOR BOX ||=============================== //

function UsersDataGrid() {
  const [t, i18n] = useTranslation();
  const service = new UsersService();
  const [isNew, setIsNew] = useState(true);
  const [rowId, setRowId] = useState(0);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [row, setRow] = useState({});
  const [refetch, setRefetch] = useState();
  const slotExample = () => <Clear />;
  const dateFilter = ({ header, rangeFilterIndex }) => {
    let filterFn = header.column.getFilterFn().name;
    let doubleActive = filterFn == 'between' || filterFn == 'betweenInclusive';
    const setFilterValue = (old, value, rangeFilterIndex) => {
      if (doubleActive) {
        old[rangeFilterIndex] = value;
        return old;
      }
      return value || '';
    };

    return (
      <DatePicker
        key={rangeFilterIndex}
        onChange={(value) => header.column.setFilterValue((old) => setFilterValue(old, value, rangeFilterIndex))}
        clearable
        // InputProps={{
        //   endAdornment: (
        //     <IconButton onClick={() => handleDateChange(null)}>
        //       <Clear />
        //     </IconButton>
        //   )
        // }}
        slots={{ startAdornment: [slotExample] }}
        slotProps={{
          textField: { variant: 'standard', endAdornment: slotExample },
          actionBar: {
            actions: ['clear', 'today']
          }
        }}
      />
    );
  };

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
        enableResizing: true
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
      // {
      //   accessorKey: 'lockoutEnabled',
      //   header: 'Lockout Enabled',
      //   type: 'boolean'
      // },
      {
        accessorKey: 'dob',
        header: 'Register Date',
        type: 'dateTime'
        // filterFn: dateFilerFn

        // muiTableHeadCellFilterTextFieldProps: {
        //   type: 'date',
        // },
        // sortingFn: 'datetime',
        // Cell: ({ renderedCellValue }) =>
        //   renderedCellValue != null && (
        //     <span>{new Intl.DateTimeFormat(i18n.language, { dateStyle: 'short', timeStyle: 'short' }).format(new Date(renderedCellValue))}</span>
        //   )
      }
      // {
      //   accessorKey: 'lockoutEnd',
      //   header: 'Lockout End',
      //   type: 'string'
      // },
      // {
      //   accessorKey: 'accessFailedCount',
      //   header: 'Access Failed Count',
      //   type: 'number'
      // }
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

  return (
    <>
      {/* <DatePicker value={value} onChange={(newValue) => setValue(newValue)} /> */}
      {/* <span>{moment('2023-05-18T01:47:49.8655649').format('YYYY/M/D h:m')}</span> */}
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
