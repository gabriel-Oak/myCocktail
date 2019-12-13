import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../shared/theme';
import { Picker } from 'react-native';

export const Input = styled(TextInput)`
  flex: 1;
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
`;

export const RowContainer = styled(Form)`
  flex-direction: row;
  justify-content: space-between;
`;