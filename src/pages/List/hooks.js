import { useState } from "react";

//State separated from view for unit test
export const ListFiltersState = props => {
  const { onSubmit, type, changeNameFilter, loading, nameFilter } = props;

  const [alcholic, setAlcholic] = useState();
  const [filter, setFilter] = useState();

  return {
    input: {
      value: nameFilter,
      onChangeText: text => changeNameFilter(text)
    },
    pickerState: {
      selectedValue: filter,
      enabled: !loading,
      onValueChange: (value, _index) => {
        onSubmit(`${type}=${value}`);

        return setFilter(value);
      }
    },
    switchState: {
      value: alcholic,
      disabled: loading,
      onValueChange: (value) => {
        setAlcholic(value);

        onSubmit(`${type}=${value ? 'Alcoholic' : 'Non_Alcoholic'}`);
      }
    }
  };
}