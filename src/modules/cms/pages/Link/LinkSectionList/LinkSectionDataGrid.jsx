// material-ui
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import TableCard from 'components/TableCard';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'modules/shared/MaterialTable/MaterialTable';
import LinkSectionService from 'modules/cms/services/LinkSectionService';
import { Delete } from '@mui/icons-material';
import { Edit } from '@mui/icons-material';
import AddOrEditLinkSection from '../AddOrEditLinkSection';
import DeleteLinkSection from '../DeleteLinkSection';
import PermissionLinkSectionDataGrid from '../../PermissionLinkSection/PermissionLinkSectionList/PermissionLinkSectionDataGrid';

import AddIcon from '@mui/icons-material/Add';
import LinkDataGrid from './LinkDataGrid';
// ===============================|| COLOR BOX ||=============================== //

function LinkSectionDataGrid() {
  const [t] = useTranslation();
  const service = new LinkSectionService();
  const [isNew, setIsNew] = useState(true);
  const [rowId, setRowId] = useState(0);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [row, setRow] = useState({});
  const [refetch, setRefetch] = useState();


  const columns = useMemo(
    () => [
      {
        accessorKey: 'key',
        header: t('fields.linkSection.key'),
        enableClickToCopy: true,
        type: 'string'
      },
      {
        accessorKey: 'title',
        header: t('fields.linkSection.title'),
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
    let linkSectionId = row.original.id;
    setIsNew(false);
    setRowId(linkSectionId);
    setOpen(true);
  };
  const handleDeleteRow = (row) => {
    setRow(row);
    setOpenDelete(true);
  };
  const handleRefetch = () => {
    setRefetch(Date.now());
  };

  const handleLinkSectionList = useCallback(async (x) => {
    return await service.getLinkSectionList(x);
  }, []);
  const AddRow = useCallback(
    () => (
      <Button color="primary" onClick={handleNewRow} variant="contained" startIcon={<AddIcon />}>
        {t('buttons.linkSection.add')}
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
      <MainCard title={t('pages.cards.linkSections-list')}>
        <TableCard>
          <MaterialTable
            refetch={refetch}
            columns={columns}
            dataApi={handleLinkSectionList}
            enableRowActions
            renderRowActions={DeleteOrEdit}
            renderTopToolbarCustomActions={AddRow}
            renderDetailPanel={({ row }) => <LinkDataGrid row={row} />}
          />
        </TableCard>
      </MainCard>
      <AddOrEditLinkSection isNew={isNew} linkSectionId={rowId} open={open} setOpen={setOpen} refetch={handleRefetch} />
      <DeleteLinkSection row={row} open={openDelete} setOpen={setOpenDelete} refetch={handleRefetch} />
    </>
  );
}

export default LinkSectionDataGrid;
