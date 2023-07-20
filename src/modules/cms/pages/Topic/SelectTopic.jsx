import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TopicsService from 'modules/cms/services/TopicService';
import { Chip, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Box } from '@mui/system';

export default function SelectTopic({ defaultValues, id, error, disabled }) {
  const [t] = useTranslation();
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

  const Items = ({ items, space }) => {
    return items.map((item) => {
      if (item.childs.length > 0) {
        return (
          <>
            <MenuItem key={item.id} value={item.id}>
              <span key={item.id}> {space}</span> {item.title}
            </MenuItem>
            <Items items={item.childs} space={<span>{space}&nbsp;&nbsp;</span>} key={'key' + item.id} />
          </>
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

    setValues();
  };
  return (
    <Select
      id={id}
      key={id + loading}
      multiple
      value={values || ''}
      label="Age"
      onChange={handleChange}
      input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
      renderValue={(selected) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selected.map((value) => (
            <Chip key={value} label={value} />
          ))}
        </Box>
      )}
    >
      <Items items={options} space={<span></span>} key={'item.id'}></Items>
    </Select>
  );
}
