import styled from 'styled-components/native';

import { Card, Subheading } from 'react-native-paper';
import { theme } from '../../shared/theme/';
import { Container } from '../../shared/theme/containers';

export const PaddedContainer = styled(Container)`
  padding: 10px;
  width: 100%;
  justify-content: space-between;
  background-color: transparent;
`;

export const HeaderView = styled.View`
  background-color: ${theme.colors.accent};
  width: 150%;
  height: 200px;
  position: absolute;
  transform: rotate(7deg);
  top: -50px;
`;

export const Subheader = styled(Subheading)`
  width: 100%;
  text-align: left;
  padding-left: 10px;
  color: ${theme.colors.contrastAccentText}
`;

export const CenterView = styled.View`
  width: 100%;
  height: 30%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const Option = styled(Card)`
  width: 49%;
  height: 100%;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const BottomCard = styled(Card)`
  width: 100%;
  height: 30%;
  overflow: hidden;
`;