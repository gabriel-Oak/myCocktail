import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../shared/theme';
import { Picker, TextInput } from 'react-native';
import { Card } from 'react-native-paper';

export const Input = styled(TextInput)`
  flex: 1;
  border: 2px solid ${theme.colors.primary};
  border-radius: 4px;
  margin: 6px 0;
  font-size: 16px;
  padding: 12px 16px;
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
  width: 100%;
  margin-top: 12px;
`;

export const ListItem = styled(Card)`
  margin-bottom: 8px;
  overflow: hidden;
  height: 68px;
`;

export const ListItemContent = styled(RectButton)`
  flex-direction: row;
  height: 100%;
`;

export const ListItemTitle = styled.View`
  padding: 16px;
  width: 60%;
`;

export const ListThumb = styled.ImageBackground`
  background-color: #fafafa;
  height: 100%;
  width: 40%;
  align-items: center;
  justify-content: center;
`;
