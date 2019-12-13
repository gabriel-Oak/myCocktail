import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../shared/theme';
import { Picker, TextInput } from 'react-native';

export const Input = styled(TextInput)`
  flex: 1;
  border: 2px solid ${theme.colors.primary};
  border-radius: 4px;
  margin: 6px 0;
  font-size: 16px;
  padding-left: 12px;
`;

export const Select = styled(Picker)`
  flex: 1;
  color: ${theme.colors.text};
  height: 56px;
`;

export const SelectWrapper = styled.View`
  border-radius: 4px;
  border: 2px solid ${theme.colors.primary};
  flex: 1;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 4px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const List = styled.View`
  flex: 1;
  /* position: absolute; */
  /* top: 50px; */
`;