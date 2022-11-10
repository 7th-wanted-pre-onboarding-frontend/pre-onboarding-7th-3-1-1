import styled from 'styled-components';

type Props = {
  color: string;
};

const Body = styled.span<Props>`
  font-size: 16px;
  color: ${({ color }) => color};
`;

export default Body;
