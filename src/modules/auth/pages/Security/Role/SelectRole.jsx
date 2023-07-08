import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react';
import RoleService from 'modules/auth/services/Security/RoleService';
import { useTranslation } from 'react-i18next';

export default function SelectRole({ defaultValues, fieldName, setFieldValue, error, disabled }) {
  const [t] = useTranslation();
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState([]);
  const roleService = new RoleService();

  const loadRoles = () => {
    roleService.getAllRoles().then((result) => {
      setOptions(result.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    loadRoles();
  }, []);

  return (
    <Autocomplete
      disabled={disabled}
      key={loading + defaultValues}
      id="roles"
      multiple
      size="small"
      getOptionLabel={(option) => option?.name}
      options={options}
      loading={loading}
      onChange={(e, newValue) => {
        setFieldValue(
          fieldName,
          newValue.map(({ id }) => id)
        );
      }}
      defaultValue={options.filter((x) => defaultValues?.find((c) => c === x.id)) ?? []}
      renderInput={(params) => (
        <TextField
          {...params}
          error={error}
          placeholder={t('pages.roles')}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            )
          }}
        />
      )}
    />
  );
}
