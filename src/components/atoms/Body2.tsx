import styled from 'styled-components';

type Props = {
  color?: string;
};
const Body2 = styled.div<Props>`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.018em;
  color: ${({ color }) => color};
`;

export default Body2;
