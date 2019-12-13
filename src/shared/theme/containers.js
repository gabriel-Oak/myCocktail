import styled from 'styled-components/native';
import { theme } from '.';
import { ScrollView } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${theme.colors.background};
`;

export const PaddedContainer = styled(Container)`
  padding: 10px;
  flex: 1;
`;


export const ScrollContainer = styled(ScrollView)`
  flex: 1;
  width: 100%;
`;