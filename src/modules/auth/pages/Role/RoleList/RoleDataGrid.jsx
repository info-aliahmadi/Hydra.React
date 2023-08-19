// material-ui
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import TableCard from 'components/TableCard';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'modules/shared/MaterialTable/MaterialTable';
import RoleService from 'modules/auth/services/RoleService';
import { Delete } from '@mui/icons-material';
import { Edit } from '@mui/icons-material';
import AddOrEditRole from '../AddOrEditRole';
import DeleteRole from '../DeleteRole';
import PermissionRoleDataGrid from '../../PermissionRole/PermissionRoleList/PermissionRoleDataGrid';

import AddIcon from '@mui/icons-material/Add';
// ===============================|| COLOR BOX ||=============================== //

function RoleDataGrid() {
  const [t] = useTranslation();
  const service = new RoleService();
  const [isNew, setIsNew] = useState(true);
  const [rowId, setRowId] = useState(0);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [row, setRow] = useState({});
  const [refetch, setRefetch] = useState();
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: '#',
        type: 'number'
      },
      {
        accessorKey: 'name',
        header: 'Role Name',
        enableClickToCopy: true,
        type: 'string'
        // filterVariant: 'text' | 'select' | 'multi-select' | 'range' | 'range-slider' | 'checkbox',
      },
      {
        accessorKey: 'normalizedName',
        header: 'Normalized Name',
        type: 'string'
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
    let roleId = row.getValue('id');
    setIsNew(false);
    setRowId(roleId);
    setOpen(true);
  };
  const handleDeleteRow = (row) => {
    setRow(row);
    setOpenDelete(true);
  };
  const handleRefetch = () => {
    setRefetch(Date.now());
  };

  const handleRoleList = useCallback(async (x) => {
    return await service.getRoleList(x);
  }, []);
  const AddRow = useCallback(
    () => (
      <Button color="primary" onClick={handleNewRow} variant="contained" startIcon={<AddIcon />}>
        {t('buttons.role.add')}
      </Button>
    ),
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
      <MainCard title={t('pages.cards.roles-list')}>
        <TableCard>
          <MaterialTable
            refetch={refetch}
            columns={columns}
            dataApi={handleRoleList}
            enableRowActions
            renderRowActions={DeleteOrEdit}
            renderTopToolbarCustomActions={AddRow}
            renderDetailPanel={({ row }) => <PermissionRoleDataGrid row={row} />}
          />
        </TableCard>
      </MainCard>
      <AddOrEditRole isNew={isNew} roleId={rowId} open={open} setOpen={setOpen} refetch={handleRefetch} />
      <DeleteRole row={row} open={openDelete} setOpen={setOpenDelete} refetch={handleRefetch} />
    </>
  );
}

export default RoleDataGrid;
