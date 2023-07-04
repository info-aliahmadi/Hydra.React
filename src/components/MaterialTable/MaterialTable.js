// material-ui

// project import
import { MaterialReactTable } from 'material-react-table';
import { useEffect, useState, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, IconButton, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import CONFIG from 'config';
// import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

// ===============================|| COLOR BOX ||=============================== //

function MaterialTable({
  columns,
  dataApi,
  dataSet,
  refetch,
  addSearchParams,
  enableColumnActions,
  enableTopToolbar,
  enableColumnFilters,
  enablePagination,
  enableSorting,
  enableColumnOrdering,
  enableColumnResizing,
  enableBottomToolbar,
  enableDensityToggle,
  enableFullScreenToggle,
  enableGlobalFilterModes,

  enableColumnFilterModes,
  manualFiltering,
  manualPagination,
  manualSorting,

  enablePinning,
  enableRowActions,
  renderRowActions,
  renderTopToolbarCustomActions,
  renderRowActionMenuItems,
  renderDetailPanel
}) {
  const [t, i18n] = useTranslation();
  const [tableLocale, setTableLocale] = useState(null);
  let currentLanguage = i18n.language;
  //data and fetching state
  const [data, setData] = useState(dataSet ? dataSet : []);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);

  //table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });

  let numbersFields = columns.filter((x) => x.type === 'number');
  let stringFields = columns.filter((x) => x.type === 'string');
  let booleanFields = columns.filter((x) => x.type === 'boolean');
  let dateFields = columns.filter((x) => x.type === 'date');
  let dateTimeFields = columns.filter((x) => x.type === 'dateTime');

  let numberFilterMode = [
    'equals',
    'notEquals',
    'between',
    'betweenInclusive',
    'greaterThan',
    'greaterThanOrEqualTo',
    'lessThan',
    'lessThanOrEqualTo',
    'empty',
    'notEmpty'
  ];
  let stringFilterMode = ['equals', 'notEquals', 'contains', 'notContains', 'startsWith', 'endsWith', 'empty', 'notEmpty'];

  let dateFilterMode = [
    'equals',
    'notEquals',
    'between',
    'betweenInclusive',
    'greaterThan',
    'greaterThanOrEqualTo',
    'lessThan',
    'lessThanOrEqualTo',
    'empty',
    'notEmpty'
  ];
  function setFilterMode() {
    numbersFields.forEach((element) => {
      element.columnFilterModeOptions = numberFilterMode;
    });
    stringFields.forEach((element) => {
      element.columnFilterModeOptions = stringFilterMode;
    });
    booleanFields.forEach((element) => {
      element.filterVariant = 'checkbox';
    });
    dateFields.forEach((element) => {
      element.columnFilterModeOptions = dateFilterMode;
    });
    dateTimeFields.forEach((element) => {
      element.columnFilterModeOptions = dateFilterMode;
    });
  }
  function setCells() {
    booleanFields.forEach((element) => {
      if (!element.Cell) {
        element.Cell = ({ renderedCellValue }) =>
          renderedCellValue != null && (
            <Checkbox checked={renderedCellValue ? true : false} title={renderedCellValue ? 'Yes' : 'No'} color="default" disabled />
          );
      }
    });
    dateFields.forEach((element) => {
      if (!element.Cell) {
        element.Cell = ({ renderedCellValue }) =>
          renderedCellValue != null && (
            <span>{new Intl.DateTimeFormat(currentLanguage, { dateStyle: [CONFIG.DATE_STYLE] }).format(new Date(renderedCellValue))}</span>
          );
      }
    });
    dateTimeFields.forEach((element) => {
      if (!element.Cell) {
        element.Cell = ({ renderedCellValue }) =>
          renderedCellValue != null && (
            <span>
              {new Intl.DateTimeFormat(currentLanguage, {
                dateStyle: [CONFIG.DATE_STYLE],
                timeStyle: [CONFIG.TIME_STYLE],
                hour12: false
              }).format(new Date(renderedCellValue))}
            </span>
          );
      }
    });
  }
  function GetDefaultFilterFunc() {
    let numbersDefaultFilters = numbersFields.map((x) => x.accessorKey);
    let defaulFilters = {};
    for (let i = 0; i < numbersDefaultFilters.length; i++) {
      let fieldName = numbersDefaultFilters[i];
      defaulFilters[fieldName] = 'equals';
    }
    let stringFieldsNames = stringFields.map((x) => x.accessorKey);
    for (let i = 0; i < stringFieldsNames.length; i++) {
      let fieldName = stringFieldsNames[i];
      defaulFilters[fieldName] = 'contains';
    }
    let booleanFieldsNames = booleanFields.map((x) => x.accessorKey);
    for (let i = 0; i < booleanFieldsNames.length; i++) {
      let fieldName = booleanFieldsNames[i];
      defaulFilters[fieldName] = 'equals';
    }

    let dateFieldsNames = dateFields.map((x) => x.accessorKey);
    for (let i = 0; i < dateFieldsNames.length; i++) {
      let fieldName = dateFieldsNames[i];
      defaulFilters[fieldName] = 'equals';
    }

    let dateTimeFieldsNames = dateTimeFields.map((x) => x.accessorKey);
    for (let i = 0; i < dateTimeFieldsNames.length; i++) {
      let fieldName = dateTimeFieldsNames[i];
      defaulFilters[fieldName] = 'equals';
    }
    return defaulFilters;
  }

  function setOperationFields(columnFilterF, columnFilters) {
    let keys = Object.keys(columnFilterF);
    for (let i = 0; i < keys.length; i++) {
      let fieldName = keys[i];
      let fieldValue = columnFilterF[fieldName];
      let element = _.find(columnFilters, ['id', fieldName]);
      element ? (element.operation = fieldValue) : undefined;
    }
  }
  const [columnFilterFns, setColumnFilterFns] = useState(GetDefaultFilterFunc());
  useEffect(() => {
    async function fetchData() {
      if (!data.length) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }

      let searchParams = {};
      searchParams['pageIndex'] = pagination.pageIndex;
      searchParams['pageSize'] = pagination.pageSize;
      setOperationFields(columnFilterFns, columnFilters);

      searchParams['filters'] = JSON.stringify(columnFilters ?? []);
      searchParams['globalFilter'] = globalFilter ?? '';
      searchParams['sorting'] = JSON.stringify(sorting ?? []);
      if (addSearchParams) {
        searchParams = { ...searchParams, addSearchParams };
      }
      try {
        const response = await dataApi(JSON.stringify(searchParams));
        setData(response.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
        return;
      }
      setIsError(false);
      setIsLoading(false);
      setIsRefetching(false);
    }
    if (dataApi) {
      fetchData();
    } else {
      setData(dataSet);
    }
  }, [columnFilters, globalFilter, pagination.pageIndex, pagination.pageSize, sorting, refetch]);

  const supportedLanguage = ['de', 'en', 'es', 'fa', 'fr', 'it', 'nl', 'pt'];

  useEffect(() => {
    setFilterMode();
    setCells();

    if (supportedLanguage.find((x) => x == currentLanguage)) {
      let loadedLanguage;
      switch (currentLanguage) {
        case 'en':
          loadedLanguage = require('material-react-table/locales/en');
          break;
        case 'fa':
          loadedLanguage = require('material-react-table/locales/fa');
          break;
        case 'de':
          loadedLanguage = require('material-react-table/locales/de');
          break;
        case 'es':
          loadedLanguage = require('material-react-table/locales/es');
          break;
        case 'it':
          loadedLanguage = require('material-react-table/locales/it');
          break;
        case 'fr':
          loadedLanguage = require('material-react-table/locales/fr');
          break;
        case 'nl':
          loadedLanguage = require('material-react-table/locales/nl');
          break;
        case 'pt':
          loadedLanguage = require('material-react-table/locales/pt');
          break;
      }
      let parentName = 'MRT_Localization_' + currentLanguage.toUpperCase();
      setTableLocale(loadedLanguage[parentName]);
    } else {
      let path = 'locales/' + currentLanguage + '/table.json';
      fetch(path)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setTableLocale(data);
        });
    }
  }, []);
  const handleRefresh = () => {
    setIsRefetching(true);
  };
  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={dataApi ? data?.items ?? [] : data} //data is undefined on first render
        initialState={{ showColumnFilters: false }}
        enableTopToolbar={(enableTopToolbar && true) ?? true}
        enableColumnActions={(enableColumnActions && true) ?? true}
        enableColumnFilters={(enableColumnFilters && true) ?? true}
        enablePagination={(enablePagination && true) ?? true}
        enableSorting={(enableSorting && true) ?? true}
        enableColumnOrdering={(enableColumnOrdering && true) ?? true}
        enableBottomToolbar={(enableBottomToolbar && true) ?? true}
        enablePinning={(enablePinning && true) ?? true}
        enableDensityToggle={(enableDensityToggle && true) ?? true}
        enableColumnResizing={(enableColumnResizing && true) ?? true}
        enableFullScreenToggle={(enableFullScreenToggle && true) ?? true}
        enableGlobalFilterModes={(enableGlobalFilterModes && true) ?? true}
        enableColumnFilterModes={(enableColumnFilterModes && true) ?? true}
        manualFiltering={(manualFiltering && true) ?? true}
        showSkeletons
        manualPagination={(manualPagination && true) ?? true}
        manualSorting={(manualSorting && true) ?? true}
        muiToolbarAlertBannerProps={
          isError
            ? {
                color: 'error',
                children: 'Error loading data'
              }
            : undefined
        }
        positionToolbarAlertBanner="center"
        onColumnFiltersChange={setColumnFilters}
        onColumnFilterFnsChange={setColumnFilterFns}
        onGlobalFilterChange={setGlobalFilter}
        onPaginationChange={setPagination}
        onSortingChange={setSorting}
        enableRowActions={enableRowActions ? true : false}
        renderRowActions={renderRowActions && renderRowActions}
        renderTopToolbarCustomActions={
          renderTopToolbarCustomActions
            ? renderTopToolbarCustomActions
            : () => (
                <Button color="primary" onClick={() => handleRefresh()} variant="contained">
                  Refresh
                </Button>
              )
        }
        renderRowActionMenuItems={renderRowActionMenuItems && renderRowActionMenuItems}
        renderDetailPanel={renderDetailPanel && renderDetailPanel}
        rowCount={dataApi ? data?.totalItems ?? 0 : data?.length}
        state={{
          columnFilters,
          columnFilterFns,
          globalFilter,
          isLoading,
          pagination,
          showAlertBanner: isError,
          showProgressBars: isRefetching,
          sorting
        }}
        localization={tableLocale}
      />
    </>
  );
}

export default memo(MaterialTable);
