import styled from 'styled-components';

type Props = {
  color?: string;
};

const Title2 = styled.h5<Props>`
  font-size: 13px;
  color: ${({ color }) => color};
  font-weight: 400;
  padding: 0 24px;
  width: 100%;
`;

export default Title2;
