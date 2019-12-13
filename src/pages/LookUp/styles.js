import styled from 'styled-components/native';
import { Container } from '../../shared/theme/containers';
import { Card } from 'react-native-paper';

export const PaddedContainer = styled(Container)`
  padding: 10px;
  flex: 1;
`;

export const CoverCard = styled(Card)`
  width: 100%;
  margin-bottom: 10px;
`;