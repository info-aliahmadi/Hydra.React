// material-ui
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Checkbox,
  Chip,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  ListItemIcon,
  MenuItem,
  OutlinedInput,
  Tooltip
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import TableCard from 'components/TableCard';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'components/MaterialTable/MaterialTable';
import ArticlesService from 'modules/cms/services/ArticlesService';
import { AccountCircle, Delete, Edit, Send } from '@mui/icons-material';
import CONFIG from 'config';
import { Stack } from '@mui/system';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import SelectTopic from '../../Topic/SelectTopic';
import ImageUpload from 'components/FileUpload/ImageUpload';
import SelectTag from '../../Tags/SelectTag';
// ===============================|| COLOR BOX ||=============================== //

function ArticlesDataGrid() {
  const [t, i18n] = useTranslation();
  const service = new ArticlesService();
  const navigate = useNavigate();

  const [fieldsName, buttonName] = ['fields.article.', 'buttons.article.'];

  const columns = useMemo(
    () => [
      // {
      //   accessorKey: 'PreviewImageId',
      //   header: t(fieldsName + 'PreviewImageId'),
      //   enableClickToCopy: true,
      //   type: 'string',
      //   Cell: ({ renderedCellValue, row }) => (
      //     <Box
      //       sx={{
      //         display: 'flex',
      //         alignItems: 'center',
      //         gap: '1rem'
      //       }}
      //     >
      //       <CardMedia component="img" height="50" image={THUMBNAIL_BASEPATH + renderedCellValue} alt="Small Thumbnail Preview" />
      //     </Box>
      //   )
      // },
      {
        accessorKey: 'subject',
        header: t(fieldsName + 'subject'),
        enableClickToCopy: true,
        type: 'string',
        enableResizing: true
      },
      {
        accessorKey: 'writer',
        header: t(fieldsName + 'writer'),
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
            {renderedCellValue.name}
          </Box>
        )
      },
      {
        accessorKey: 'editor',
        header: t(fieldsName + 'editor'),
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
            {renderedCellValue?.name}
          </Box>
        )
      },
      {
        accessorKey: 'isDraft',
        header: t(fieldsName + 'isDraft'),
        type: 'boolean',
        enableResizing: true,
        Cell: ({ renderedCellValue, row }) => (
          <Chip
            variant="combined"
            color={renderedCellValue == true ? 'warning' : 'primary'}
            // icon={<>{renderedCellValue == true ? 'Published' : 'Draft'}</>}
            label={renderedCellValue == true ? t(fieldsName + 'draft') : t(fieldsName + 'published')}
            // sx={{ ml: 1.25, pl: 1 }}
            size="small"
          />
        )
      },
      {
        accessorKey: 'publishDate',
        header: t(fieldsName + 'publishDate'),
        type: 'dateTime'
      }
    ],
    []
  );

  const handleArticleList = useCallback(async (filters) => {
    return await service.getArticleList(filters);
  }, []);
  const AddRow = useCallback(
    () => (
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          navigate('/article/add/0');
        }}
        startIcon={<AddIcon />}
      >
        {t(buttonName + 'add')}
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
          <IconButton
            onClick={() => {
              navigate('/article/edit/' + row.original.id);
            }}
          >
            <Edit />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    []
  );
  const ArticleDetail = ({ row }) => {
    return (
      <Grid container spacing={3} direction="row" justifyArticle="flex-start" alignItems="flex-start">
        <Grid container item spacing={3} xs={12} sm={6} md={3} lg={3} xd={3} direction="row" justifyArticle="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <Stack>
              {row.original.previewImageId && <ImageUpload value={row.original.previewImageId} disabled={true} filePosterMaxHeight={300} />}
              {row.original.previewImageUrl && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <CardMedia component="img" height="100" image={row.original.imagePreviewUrl} alt="Preview" />
                </Box>
              )}
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={3}
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xd={6}
          direction="row"
          justifyArticle="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="subject">{t(fieldsName + 'subject')}</InputLabel>
              <OutlinedInput
                id="subject"
                type="text"
                value={row.original.subject}
                fullWidth
                disabled
                endAdornment={
                  <Chip
                    variant="combined"
                    color={row.original.isDraft == true ? 'warning' : 'primary'}
                    label={row.original.isDraft == true ? t(fieldsName + 'draft') : t(fieldsName + 'published')}
                    size="small"
                  />
                }
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="body">{t(fieldsName + 'body')}</InputLabel>
              <div className="MuiOutlinedvid-notchedOutline" dangerouslySetInnerHTML={{ __html: row.original.body }} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="writer">{t(fieldsName + 'writer')}</InputLabel>
              <OutlinedInput id="writer" type="text" value={row.original.writer.name} fullWidth disabled />
            </Stack>
          </Grid>
          {row.original.editor?.name && (
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <InputLabel htmlFor="editor">{t(fieldsName + 'editor')}</InputLabel>
                <OutlinedInput id="editor" type="text" value={row.original.editor?.name} fullWidth disabled />
              </Stack>
            </Grid>
          )}
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="registerDate">{t(fieldsName + 'registerDate')}</InputLabel>
              <OutlinedInput
                id="registerDate"
                type="text"
                value={new Intl.DateTimeFormat(i18n.language, {
                  dateStyle: 'long',
                  timeStyle: [CONFIG.TIME_STYLE],
                  hour12: false
                }).format(moment(row.original.registerDate))}
                fullWidth
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="publishDate">{t(fieldsName + 'publishDate')}</InputLabel>
              <OutlinedInput
                id="publishDate"
                type="text"
                value={new Intl.DateTimeFormat(i18n.language, {
                  dateStyle: 'long',
                  timeStyle: [CONFIG.TIME_STYLE],
                  hour12: false
                }).format(moment(row.original.publishDate))}
                fullWidth
                disabled
              />
            </Stack>
          </Grid>
          {row.original.editDate && (
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <InputLabel htmlFor="editDate">{t(fieldsName + 'editDate')}</InputLabel>
                <OutlinedInput
                  id="editDate"
                  type="text"
                  value={new Intl.DateTimeFormat(i18n.language, {
                    dateStyle: 'long',
                    timeStyle: [CONFIG.TIME_STYLE],
                    hour12: false
                  }).format(moment(row.original.editDate))}
                  fullWidth
                  disabled
                />
              </Stack>
            </Grid>
          )}
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="topicsIds">{t(fieldsName + 'topicsIds')}</InputLabel>
              <SelectTopic disabled defaultValues={row.original.topicsIds} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="tags">{t(fieldsName + 'tags')}</InputLabel>
              <SelectTag defaultValues={row.original.tags || []} disabled={true} />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  return (
    <>
      <MainCard title={t('pages.cards.articles-list')}>
        <TableCard>
          <MaterialTable
            columns={columns}
            dataApi={handleArticleList}
            enableRowActions
            renderRowActions={DeleteOrEdit}
            renderTopToolbarCustomActions={AddRow}
            renderDetailPanel={({ row }) => <ArticleDetail row={row} />}
          />
        </TableCard>
      </MainCard>
    </>
  );
}

export default ArticlesDataGrid;
