// material-ui

// project import
import { MaterialReactTable } from 'material-react-table';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, IconButton, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
// import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

// ===============================|| COLOR BOX ||=============================== //

function MaterialTable(props) {
  const [t, i18n] = useTranslation();
  const [tableLocale, setTableLocale] = useState(null);
  let currentLanguage = i18n.language;
  //data and fetching state
  const [data, setData] = useState([]);
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

  let numbersFields = props.columns.filter((x) => x.type === 'number');
  let stringFields = props.columns.filter((x) => x.type === 'string');
  let dateFields = props.columns.filter((x) => x.type === 'date');

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
    dateFields.forEach((element) => {
      element.columnFilterModeOptions = dateFilterMode;
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
    let dateFieldsNames = dateFields.map((x) => x.accessorKey);
    for (let i = 0; i < dateFieldsNames.length; i++) {
      let fieldName = dateFieldsNames[i];
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
    debugger;
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
      if (props.searchParams) {
        let surplusSearchParams = props.searchParams;
        searchParams = { ...searchParams, surplusSearchParams };
      }
      try {
        const response = await props.dataApi(JSON.stringify(searchParams));
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
    fetchData();
  }, [columnFilters, globalFilter, pagination.pageIndex, pagination.pageSize, sorting]);

  const supportedLanguage = ['de', 'en', 'es', 'fa', 'fr', 'it', 'nl', 'pt'];

  useEffect(() => {
    setFilterMode();

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
  const handleNewRow = () => {
    setIsRefetching(true);
  };
  return (
    <>
      <MaterialReactTable
        columns={props?.columns}
        data={data?.items ?? []} //data is undefined on first render
        initialState={{ showColumnFilters: false }}
        enableColumnFilterModes
        enableColumnOrdering
        enablePinning={props?.enablePinning ? true : false}
        manualFiltering
        showSkeletons
        manualPagination
        manualSorting
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
        enableRowActions={props?.enableRowActions ? true : false}
        renderRowActions={props?.renderRowActions && props.renderRowActions}
        renderTopToolbarCustomActions={
          props?.renderTopToolbarCustomActions
            ? props.renderTopToolbarCustomActions
            : () => (
                <Button color="primary" onClick={() => handleNewRow()} variant="contained">
                  {t('buttons.role.add')}
                </Button>
              )
        }
        rowCount={data?.totalItems ?? 0}
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

export default React.memo(MaterialTable);
