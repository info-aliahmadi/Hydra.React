// material-ui
import { Avatar, Box, Button, FormHelperText, Grid, IconButton, Tooltip } from '@mui/material';

// project import
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'modules/shared/MaterialTable/MaterialTable';
import { Delete, ImageNotSupported } from '@mui/icons-material';
import DeleteLink from '../DeleteLink';
import LinkAutoComplete from '../../Link/LinkAutoComplete';
import LinkService from 'modules/cms/services/LinkService';
import Notify from 'components/@extended/Notify';
// ===============================|| COLOR BOX ||=============================== //
const ImagePreviewRow = ({ renderedCellValue, row }) => {
  let src = renderedCellValue?.fileName
    ? mediaExtensions.some((extension) => extension == _.toLower(renderedCellValue?.extension))
      ? CONFIG.UPLOAD_BASEPATH + renderedCellValue.directory + renderedCellValue?.thumbnail
      : row.original.previewImageUrl
      ? row.original.previewImageUrl
      : null
    : null;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}
    >
      {src != null ? (
        <img alt="ImagePreview" src={src} height={'80px'} />
      ) : (
        <Avatar variant="rounded">
          <ImageNotSupported />
        </Avatar>
      )}
    </Box>
  );
};
function LinkDataGrid({ row }) {
  const [t] = useTranslation();
  const [data, setData] = useState(() => row.original.links);
  const [linkId, setLinkId] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const [notify, setNotify] = useState(false);
  const [refetch, setRefetch] = useState();
  const [linkRow, setLinkRow] = useState();

  let roleId = row.original.id;

  const columns = useMemo(
    () => [
      {
        accessorKey: 'previewImage',
        header: t('fields.link.previewImage'),
        type: 'string',
        Cell: ({ renderedCellValue, row }) => <ImagePreviewRow renderedCellValue={renderedCellValue} row={row} />
      },
      {
        accessorKey: 'title',
        header: t('fields.link.title'),
        enableClickToCopy: true,
        type: 'string'
        // filterVariant: 'text' | 'select' | 'multi-select' | 'range' | 'range-slider' | 'checkbox',
      },
      {
        accessorKey: 'url',
        header: t('fields.link.Url'),
        type: 'string'
      },
      {
        accessorKey: 'description',
        header: t('fields.link.Description'),
        type: 'string'
      },
      {
        accessorKey: 'userName',
        header: t('fields.link.userName'),
        type: 'string'
      }
    ],
    []
  );

  const handleNewRow = () => {
    if (!(linkId > 0)) {
      setLinkId(0);
      return;
    }
    let linkService = new LinkService();
    linkService
      .addLink(linkId, linkSectionId)
      .then((link) => {
        data.push(link?.data);
        setData([...data]);
        row.original.links = [...data];
        handleRefetch();
        setLinkId(null);
        setNotify({ open: true });
      })
      .catch((error) => {
        setNotify({ open: true, type: 'error', description: error });
      });
  };
  const handleDeleteRow = (row) => {
    setLinkRow(row);
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
      <Notify notify={notify} setNotify={setNotify}></Notify>
      <Grid container spacing={3} direction="row">
        <Grid item xd={12} sm={12} md={12}>
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

      <AddOrEditLink isNew={isNew} linkSectionId={rowId} open={open} setOpen={setOpen} refetch={handleRefetch} />
      <DeleteLink
        row={row}
        linkRow={linkRow}
        roleId={roleId}
        open={openDelete}
        setOpen={setOpenDelete}
        data={data}
        setData={setData}
        refetch={handleRefetch}
      />
    </>
  );
}

export default LinkDataGrid;
