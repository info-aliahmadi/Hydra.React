// material-ui
import { Grid } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import TableCard from 'components/TableCard';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'components/MaterialTable';

// ===============================|| COLOR BOX ||=============================== //
const data = [
  {
    name: 'John',
    age: 30
  },
  {
    name: 'Sara',
    age: 25
  }
];
function RoleList() {
  debugger
  const [t] = useTranslation();
  // let path = process.env.PUBLIC_URL + '/locales/fa/table.json';
  // let dataloc = require(path);
  // debugger;
  // const [tableLocale, setTableLocale] = useState(null);

  // let path = 'locales/' + i18n.language + '/table.json';

  // useEffect(() => {
  //   fetch(path)
  //     .then(function (res) {
  //       return res.json();
  //     })
  //     .then(function (data) {
  //       setTableLocale(data);
  //     });
  // }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', //simple recommended way to define a column
        header: 'Name',
        muiTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span> //optional custom cell render
      },
      {
        accessorFn: (row) => row.age, //alternate way
        id: 'age', //id required if you use accessorFn instead of accessorKey
        header: 'Age',
        Header: () => <i>Age</i> //optional custom header render
      }
    ],
    []
  );

  //optionally, you can manage any/all of the table state yourself
  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    //do something when the row selection changes
  }, [rowSelection]);

  //Or, optionally, you can get a reference to the underlying table instance
  const tableInstanceRef = useRef(null);

  const someEventHandler = () => {
    //read the table state during an event from the table instance ref
    console.log(tableInstanceRef.current.getState().sorting);
  };

  return (
    <>
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MainCard title={t('pages.edit-profile')} codeHighlight>
            <TableCard>
              <MaterialTable
                columns={columns}
                data={data}
                enableColumnOrdering //enable some features
                enableRowSelection
                enablePagination={false} //disable a default feature
                // onRowSelectionChange={setRowSelection} //hoist internal state to your own state (optional)
                state={{ rowSelection }} //manage your own state, pass it back to the table (optional)
                tableInstanceRef={tableInstanceRef} //get a reference to the underlying table instance (optional)
                // localization={LocaleTable(i18n.language)}
              />
            </TableCard>
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
}

export default RoleList;
