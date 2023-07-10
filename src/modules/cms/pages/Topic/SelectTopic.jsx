import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react';
import TopicService from 'modules/cms/services/TopicService';
import { useTranslation } from 'react-i18next';

export default function SelectTopic({ defaultValues, id, setFieldValue, error, disabled }) {
  const [t] = useTranslation();
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState([]);
  const topicService = new TopicService();

  const loadTopics = () => {
    topicService.getAllTopics().then((result) => {
      setOptions(result.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    loadTopics();
  }, []);

  return (
    <Autocomplete
      disabled={disabled}
      key={loading + defaultValues + error}
      multiple
      size="small"
      getOptionLabel={(option) => option?.name}
      options={options}
      loading={loading}
      error={error}
      id={id}
      name={id}
      onChange={(e, newValue) =>
        setFieldValue(
          id,
          newValue.map(({ id }) => id)
        )
      }
      defaultValue={options.filter((x) => defaultValues?.find((c) => c === x.id)) ?? []}
      renderInput={(params) => (
        <TextField
          {...params}
          error={error}
          placeholder={t('pages.topics')}
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
