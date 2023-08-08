import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TagsService from 'modules/cms/services/TagsService';
import { Chip } from '@mui/material';

export default function SelectTag({ defaultValues, id, name, onChange, error, disabled }) {
  const [t] = useTranslation();
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState([]);
  const tagService = new TagsService();

  const loadTags = () => {
    tagService.getTagListForSelect().then((result) => {
      setOptions(result.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    loadTags();
  }, []);

  return (
    <Autocomplete
      disabled={disabled}
      // key={loading + defaultValues + error}
      multiple
      freeSolo
      size="small"
      getOptionLabel={(option) => option}
      options={options.map((option) => option.title)}
      loading={loading}
      error={error}
      id={id}
      name={name}
      defaultValue={options.filter((x) => defaultValues?.find((c) => c === x.id)) ?? []}
      onChange={(e, newValue) => {
        debugger
        // آرایه ی تگ هارو بفرست و توی بک هر کدوم نبود اضافه کن و ایدیشونو ثبت کن- تمام
        let target = {
          target: {
            name: id,
            value: newValue.map(({ id }) => id) || ''
          }
        };
        onChange(target);
      }}
      renderTags={(value, getTagProps) => {
        // debugger;
        return value.map((option, index) => {
          // debugger;
          return <Chip key={'tg-' + index} variant="outlined" label={option} {...getTagProps({ index })} />;
        });
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          error={error}
          placeholder={t('pages.tags')}
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
