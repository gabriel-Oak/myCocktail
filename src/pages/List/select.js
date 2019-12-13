import React from 'react';
import { SelectWrapper, Select } from './styles';


const SelectFilter = props => {
  const { state, list } = props;

  return (
    <SelectWrapper>
      <Select
        {...state}
      >
        {
          list.map((item, index) => item.label && (
            <Select.Item
              label={item.label}
              value={item.value}
              key={index}
            />
          ))
        }
      </Select>
    </SelectWrapper>
  );
}

export default SelectFilter
