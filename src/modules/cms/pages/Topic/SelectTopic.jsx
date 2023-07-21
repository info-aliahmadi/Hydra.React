import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TopicsService from 'modules/cms/services/TopicService';
import { Chip, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Box, useTheme } from '@mui/system';

export default function SelectTopic({ defaultValues, id, error, disabled }) {
  const [t] = useTranslation();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState([]);
  const [values, setValues] = useState([]);
  const topicService = new TopicsService();

  const loadTopics = () => {
    topicService.getTopicList().then((result) => {
      setOptions(result.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    loadTopics();
  }, []);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };
  function getStyles(value, values, theme) {
    return {
      fontWeight: values.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
    };
  }
  const Items = ({ items, space }) => {
    return items.map((item) => {
      if (item.childs.length > 0) {
        return (
          // <React.Fragment key={item.id}>
          <MenuItem key={item.id} value={item.id}>
            <span key={item.id}> {space}</span> {item.title}
          </MenuItem>
        );
      } else {
        return (
          <MenuItem key={item.id} value={item.id}>
            <span key={item.id}> {space}</span>
            {item.title}
          </MenuItem>
        );
      }
    });
  };
  const handleChange = (event) => {
    debugger;
    setValues(event.target.value);
  };
  const handleDelete = (event) => {
    setValues(event.target.value);
  };

  return (
    <Select
      id={id}
      key={id + loading}
      multiple
      value={values || ''}
      label={''}
      onChange={handleChange}
      MenuProps={MenuProps}
      input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
      renderValue={(selected) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selected.map((value) => {
            let title = options.find((x) => x.id == value).title;
            return <Chip key={title} label={title} />;
          })}
        </Box>
      )}
    >
      {options.map((item) => {
        return (
          // <React.Fragment key={item.id}>
          <MenuItem key={item.id} value={item.id} style={getStyles(item.id, values, theme)}>
            {item.title}
          </MenuItem>
          // </React.Fragment>
        );
      })}
      {/* <Items items={options} space={<span></span>} key={'options'}></Items> */}
    </Select>
  );
}
