import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import PermissionService from 'modules/auth/services/Security/PermissionService';

export default function PermissionAutoComplete({ value, setValue }) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [newValue, setNewValue] = React.useState(value);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  const onChange = (event, newValue) => {
    setValue(newValue?.id);
    setNewValue(newValue);
  };
  const onInputChange = (event, newInputValue) => {
    if (newInputValue != 'undefined' && newInputValue != null && newInputValue != '') {
      setLoading(true);
      let permissionService = new PermissionService();
      permissionService.getPermissionsByName(newInputValue).then((permissions) => {
        setOptions([...permissions.data]);
        setLoading(false);
      });
    }
  };

  return (
    <Autocomplete
      id="permissionId"
      value={newValue}
      sx={{ minWidth: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      //   inputValue={newValue}s
      onInputChange={onInputChange}
      onChange={onChange}
      //   defaultValue
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="filled"
          size="small"
          label="Select Permission"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={15} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            )
          }}
        />
      )}
    />
  );
}
