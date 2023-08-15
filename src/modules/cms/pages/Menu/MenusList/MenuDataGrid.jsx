import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';

import MainCard from 'components/MainCard';
import TableCard from 'components/TableCard';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'components/MaterialTable/MaterialTable';
import MenuService from 'modules/cms/services/MenuService';
import { Edit, Menu, Add, Delete } from '@mui/icons-material';
import AddOrEditMenu from '../AddOrEditMenu';
import DeleteMenu from '../DeleteMenu';

function MenuDataGrid() {
  const [t] = useTranslation();
  const service = new MenuService();
  const [isNew, setIsNew] = useState(true);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [row, setRow] = useState({});
  const [refetch, setRefetch] = useState();

  const columns = useMemo(
    () => [
      {
        accessorKey: 'title',
        header: 'Menu Name',
        enableClickToCopy: true,
        type: 'string'
        // filterVariant: 'text' | 'select' | 'multi-select' | 'range' | 'range-slider' | 'checkbox',
      }
    ],
    []
  );

  const handleNewRow = (row) => {
    setIsNew(true);
    setRow(row);
    setOpen(true);
  };
  const handleEditRow = (row) => {
    setIsNew(false);
    setRow(row);
    setOpen(true);
  };
  const handleDeleteRow = (row) => {
    setRow(row);
    setOpenDelete(true);
  };
  const handleRefetch = () => {
    setRefetch(Date.now());
  };

  const handleMenuList = useCallback(() => {
    return service.getMenuList();
  }, []);
  const AddRow = useCallback(
    () => (
      <Button color="primary" onClick={() => handleNewRow(null)} variant="contained" startIcon={<Menu />}>
        {t('buttons.menu.addMainMenu')}
      </Button>
    ),
    []
  );
  const DeleteOrEdit = useCallback(
    ({ row }) => (
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip arrow placement="top-start" title={t('buttons.menu.delete')}>
          <IconButton color="error" onClick={() => handleDeleteRow(row)}>
            <Delete />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top-start" title={t('buttons.menu.edit')}>
          <IconButton onClick={() => handleEditRow(row)}>
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top-start" title={t('buttons.menu.addSubMenu')}>
          <IconButton onClick={() => handleNewRow(row)}>
            <Add />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    []
  );
  return (
    <>
      <MainCard title={t('pages.cards.menu')}>
        <TableCard>
          <MaterialTable
            refetch={refetch}
            columns={columns}
            dataApi={handleMenuList}
            enableExpanding={true}
            enableExpandAll={true}
            getSubRows={(originalRow) => originalRow.childs}
            enablePagination={false}
            enableColumnOrdering={false}
            enableColumnFilters={false}
            enableColumnResizing={false}
            enableBottomToolbar={false}
            enableGlobalFilterModes={false}
            enableColumnFilterModes={false}
            enableRowActions
            renderRowActions={DeleteOrEdit}
            renderTopToolbarCustomActions={AddRow}
            enableRowOrdering={true}
            muiTableBodyRowDragHandleProps={({ table }) => ({
              onDragEnd: () => {
                debugger;
                const { draggingRow, hoveredRow } = table.getState();
                if (hoveredRow && draggingRow) {
                  data.splice(hoveredRow.index, 0, data.splice(draggingRow.index, 1)[0]);
                  setData([...data]);
                }
              }
            })}
          />
        </TableCard>
      </MainCard>
      <AddOrEditMenu isNew={isNew} row={row} open={open} setOpen={setOpen} refetch={handleRefetch} />
      <DeleteMenu row={row} open={openDelete} setOpen={setOpenDelete} refetch={handleRefetch} />
    </>
  );
}

export default MenuDataGrid;
