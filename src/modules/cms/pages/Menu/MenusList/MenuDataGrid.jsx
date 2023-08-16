import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';

import MainCard from 'components/MainCard';
import TableCard from 'components/TableCard';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'components/MaterialTable/MaterialTable';
import MenuService from 'modules/cms/services/MenuService';
import { Edit, Menu, Add, Delete } from '@mui/icons-material';
import AddOrEditMenu from '../AddOrEditMenu';
import DeleteMenu from '../DeleteMenu';
import Notify from 'components/@extended/Notify';

function MenuDataGrid() {
  const [t] = useTranslation();
  const menuService = new MenuService();
  const [isNew, setIsNew] = useState(true);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [row, setRow] = useState({});
  const [refetch, setRefetch] = useState();
  const [data, setData] = useState([]);
  const [notify, setNotify] = useState({ open: false });

  const columns = useMemo(
    () => [
      {
        accessorKey: 'title',
        header: t('fields.menu.title'),
        enableClickToCopy: true,
        type: 'string'
        // filterVariant: 'text' | 'select' | 'multi-select' | 'range' | 'range-slider' | 'checkbox',
      },
      {
        accessorKey: 'url',
        header: t('fields.menu.url'),
        enableClickToCopy: true,
        type: 'string'
        // filterVariant: 'text' | 'select' | 'multi-select' | 'range' | 'range-slider' | 'checkbox',
      }
    ],
    []
  );
  useEffect(() => {
    menuService.getMenuList().then((result) => {
      setData(() => result.data);
      handleRefetch();
    });
  }, []);

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

  function replaceAndSort(data, idToReplace, idToReplaceBeside) {
    const findItem = (id, items) => {
      for (const item of items) {
        if (item.id === id) {
          return item;
        } else if (item.childs.length > 0) {
          const found = findItem(id, item.childs);
          if (found) return found;
        }
      }
      return null;
    };

    const itemToReplace = findItem(idToReplace, data);
    const itemBeside = findItem(idToReplaceBeside, data);
    debugger;
    itemToReplace.parentId = itemBeside.parentId;
    if (itemToReplace.order > itemBeside.order) {
      itemToReplace.order = itemBeside.order - 1;
    } else {
      itemBeside.order = itemToReplace.order - 1;
    }

    if (!itemToReplace || !itemBeside) {
      console.log('One or both items not found');
      return data;
    }

    const parentOfItemToReplace = findItemParent(idToReplace, data);
    const parentOfItemBeside = findItemParent(idToReplaceBeside, data);

    if (!parentOfItemToReplace || !parentOfItemBeside) {
      console.log('Parent of item to replace or parent of item beside not found');
      return data;
    }

    // Find the indices of the items within their respective parents
    const indexToReplace = parentOfItemToReplace.childs.findIndex((child) => child.id === idToReplace);
    const indexBeside = parentOfItemBeside.childs.findIndex((child) => child.id === idToReplaceBeside);

    if (indexToReplace === -1 || indexBeside === -1) {
      console.log('Could not find indices for items to replace or items beside');
      return data;
    }

    // Replace items between different parents at the same depth
    parentOfItemToReplace.childs.splice(indexToReplace, 1);
    parentOfItemBeside.childs.splice(indexBeside, 0, itemToReplace);

    // Sort by order
    const sortRecursive = (items) => {
      items.sort((a, b) => a.order - b.order);
      for (const item of items) {
        if (item.childs.length > 0) {
          sortRecursive(item.childs);
        }
      }
    };

    sortRecursive(data);
    debugger;
    return data;
  }

  function findItemParent(id, items) {
    for (const item of items) {
      if (item.childs.some((child) => child.id === id)) {
        return item;
      } else if (item.childs.length > 0) {
        const found = findItemParent(id, item.childs);
        if (found) return found;
      }
    }
    return null;
  }

  return (
    <>
      <Notify notify={notify} setNotify={setNotify}></Notify>
      <MainCard title={t('pages.cards.menu')}>
        <TableCard>
          <MaterialTable
            //key={'id' + refetch}
            dataSet={data}
            refetch={refetch}
            columns={columns}
            // dataApi={handleMenuList}
            enableExpanding={true}
            enableExpandAll={true}
            getSubRows={(originalRow) => originalRow?.childs}
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
            autoResetPageIndex={false}
            muiTableBodyRowDragHandleProps={({ table }) => ({
              onDragEnd: () => {
                const { draggingRow, hoveredRow } = table.getState();
                if (hoveredRow && draggingRow) {
                  if (hoveredRow.depth != draggingRow.depth) {
                    setNotify({ open: true, type: 'error', description: "You can't replace items from different depth" });
                    return;
                  }
                  if (hoveredRow.depth == 0) {
                    data.splice(hoveredRow.index, 0, data.splice(draggingRow.index, 1)[0]);
                  } else {
                    replaceAndSort(data, draggingRow.original.id, hoveredRow.original.id);
                  }

                  setData([...data]);
                  handleRefetch();
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
