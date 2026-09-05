import { useState, useEffect } from 'react';
import Select from 'react-select';
import { getCrops } from '../api';

const CropAutocomplete = ({ onChange, value }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Mock implementation for demo
    setOptions([
      { value: '1', label: 'Wheat (Grade A)' },
      { value: '2', label: 'Rice (Basmati)' },
      { value: '3', label: 'Tomatoes' }
    ]);
  }, []);

  return (
    <Select
      options={options}
      value={options.find(o => o.value === value) || null}
      onChange={val => onChange(val ? val.value : '')}
      placeholder="Select crop..."
      className="react-select-container"
      classNamePrefix="react-select"
    />
  );
};
export default CropAutocomplete;
