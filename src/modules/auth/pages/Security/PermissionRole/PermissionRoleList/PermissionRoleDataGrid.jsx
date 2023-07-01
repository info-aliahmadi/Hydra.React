// material-ui
import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material';

// project import
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'components/MaterialTable/MaterialTable';
import { Delete } from '@mui/icons-material';
import DeletePermissionRole from '../DeletePermissionRole';
import PermissionAutoComplete from '../../Permission/PermissionAutoComplete';
import PermissionRoleService from 'modules/auth/services/Security/PermissionRoleService';
// ===============================|| COLOR BOX ||=============================== //

function PermissionRoleDataGrid({ roleId, dataSet }) {
  const [t] = useTranslation();
  const [data, setData] = useState(() => dataSet);
  const [permissionId, setPermissionId] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const [row, setRow] = useState({});
  const [refetch, setRefetch] = useState();
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Permission Name',
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
    debugger;
    let permissionRoleService = new PermissionRoleService();
    permissionRoleService.addPermissionRole(permissionId, roleId).then((permission) => {
      data.push(permission?.data);
      setData([...data]);
      handleRefetch();
    });
  };
  const handleDeleteRow = (row) => {
    setRow(row);
    setOpenDelete(true);
  };
  const handleRefetch = () => {
    setRefetch(Date.now());
  };

  const DeleteHandle = useCallback(
    ({ row }) => (
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip arrow placement="top-start" title="Delete">
          <IconButton color="error" onClick={() => handleDeleteRow(row)}>
            <Delete />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    []
  );
  return (
    <>
      <Grid container spacing={3} direction="row">
        <Grid item md={2}>
          <Button color="primary" onClick={handleNewRow} variant="contained">
            {t('buttons.permission.add-permission-to-role')}
          </Button>
        </Grid>
        <Grid item md={6}>
          <PermissionAutoComplete value={permissionId} setValue={setPermissionId} />
        </Grid>
        <Grid item md={12}>
          <MaterialTable
            refetch={refetch}
            columns={columns}
            dataSet={data}
            enableColumnActions={false}
            enableTopToolbar={false}
            enableColumnFilters={false}
            enablePagination={false}
            enableSorting={false}
            enableBottomToolbar={false}
            enableColumnFilterModes={false}
            enableColumnOrdering={false}
            enablePinning={false}
            enableDensityToggle={false}
            enableFullScreenToggle={false}
            enableGlobalFilterModes={false}
            enableRowActions
            renderRowActions={DeleteHandle}
          />
        </Grid>
      </Grid>

      <DeletePermissionRole
        row={row}
        roleId={roleId}
        open={openDelete}
        setOpen={setOpenDelete}
        dataSet={data}
        setData={setData}
        refetch={handleRefetch}
      />
    </>
  );
}

export default PermissionRoleDataGrid;
