// material-ui
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Checkbox,
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
// ===============================|| COLOR BOX ||=============================== //

function ArticlesDataGrid() {
  const [t, i18n] = useTranslation();
  const service = new ArticlesService();
  const navigate = useNavigate();

  const [fieldsName, buttonName] = ['fields.article.', 'buttons.article.'];

  const columns = useMemo(
    () => [
      {
        accessorKey: 'smallThumbnail',
        header: t(fieldsName + 'smallThumbnail'),
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
            <CardMedia component="img" height="50" image={THUMBNAIL_BASEPATH + renderedCellValue} alt="Small Thumbnail Preview" />
          </Box>
        )
      },
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
        accessorKey: 'isDraft',
        header: t(fieldsName + 'status'),
        type: 'boolean',
        enableResizing: true
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
          <IconButton onClick={() => handleEditRow(row)}>
            <Edit />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    []
  );
  const ArticleDetail = ({ row }) => {
    return (
      <Grid container spacing={3} direction="row">
        <Grid container item spacing={3} xd={12} sm={6} md={3} lg={3} direction="row" justifyArticle="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <Stack>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <CardMedia
                  component="img"
                  height="100"
                  image={THUMBNAIL_BASEPATH + row.original.smallThumbnail}
                  alt="Small Thumbnail Preview"
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Grid container item spacing={3} xd={12} sm={6} md={6} lg={6}>
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              <InputLabel htmlFor="subject">{t(fieldsName + 'subject')}</InputLabel>
              <OutlinedInput id="subject" type="text" value={row.original.subject} fullWidth disabled />
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              <InputLabel htmlFor="body">{t(fieldsName + 'body')}</InputLabel>
              <OutlinedInput id="body" type="text" value={row.original.body} fullWidth disabled />
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              <InputLabel htmlFor="writer">{t(fieldsName + 'writer')}</InputLabel>
              <OutlinedInput id="writer" type="text" value={row.original.writer.name} fullWidth disabled />
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              <InputLabel htmlFor="isDraft">{t(fieldsName + 'isDraft')}</InputLabel>
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    id="isDraft"
                    checked={row.original.isDraft ? true : false}
                    title={row.original.isDraft ? 'Yes' : 'No'}
                    color="default"
                    disabled
                  />
                }
                label={t(fieldsName + 'emailConfirmed')}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
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
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="topicsIds">{t('pages.topicsIds')}</InputLabel>
              <SelectTopic disabled defaultValues={row.original.topicsIds} />
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
