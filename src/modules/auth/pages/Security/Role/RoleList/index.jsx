// material-ui
import { Grid } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import TableCard from 'components/TableCard';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'components/MaterialTable';
import RoleService from 'modules/auth/services/Security/RoleService';

// ===============================|| COLOR BOX ||=============================== //

function RoleList() {
  const [t] = useTranslation();
  const service = new RoleService();

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: '#'
      },
      {
        accessorKey: 'name',
        header: 'Role Name'
      },
      {
        accessorKey: 'normalizedName',
        header: 'Normalized Name'
      }
    ],
    []
  );

  return (
    <>
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <MainCard title={t('pages.edit-profile')} codeHighlight>
            <TableCard>
              <MaterialTable columns={columns} dataApi={service.getRoleList} />
            </TableCard>
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
}

export default RoleList;
