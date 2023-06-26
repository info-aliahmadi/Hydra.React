// material-ui
import { Box, Button, IconButton, Tooltip } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import TableCard from 'components/TableCard';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'components/MaterialTable/MaterialTable';
import RoleService from 'modules/auth/services/Security/RoleService';
import { Delete } from '@mui/icons-material';
import { Edit } from '@mui/icons-material';
import AddOrEditRole from '../../AddOrEditRole';
// ===============================|| COLOR BOX ||=============================== //

function RoleDataGrid() {
  const [t] = useTranslation();
  const service = new RoleService();
  const [isNew, setIsNew] = useState();
  const [rowId, setRowId] = useState(0);
  const [open, setOpen] = useState(false);
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
    debugger;
    let roleId = row.getValue('id');
    setIsNew(false);
    setRowId(roleId);
    setOpen(true);
  };
  const handleRefetch = () => {
    Date.now();
  };
  const handleDeleteRow = useCallback();
  // (row) => {
  //   if (!confirm(`Are you sure you want to delete ${row.getValue('firstName')}`)) {
  //     return;
  //   }
  //   //send api delete request here, then refetch or update local table data for re-render
  //   tableData.splice(row.index, 1);
  //   setTableData([...tableData]);
  // },
  // [tableData]

  return (
    <>
      <MainCard title={t('pages.cards.roles-list')} codeHighlight>
        <TableCard>
          <MaterialTable
            // refetch={handleRefetch}
            columns={columns}
            dataApi={service.getRoleList}
            enableRowActions
            renderRowActions={({ row }) => (
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
            )}
            renderTopToolbarCustomActions={() => (
              <Button color="primary" onClick={() => handleNewRow()} variant="contained">
                {t('buttons.role.add')}
              </Button>
            )}
            // renderDetailPanel={({ row }) => (
            //   <Box
            //     sx={{
            //       display: 'grid',
            //       margin: 'auto',
            //       gridTemplateColumns: '1fr 1fr',
            //       width: '100%'
            //     }}
            //   >
            //     <Typography>Address: {row.original.address}</Typography>
            //     <Typography>City: {row.original.city}</Typography>
            //     <Typography>State: {row.original.state}</Typography>
            //     <Typography>Country: {row.original.country}</Typography>
            //   </Box>
            // )}
          />
        </TableCard>
      </MainCard>
      <AddOrEditRole isNew={isNew} roleId={rowId} open={open} setOpen={setOpen} />
    </>
  );
}

export default RoleDataGrid;
