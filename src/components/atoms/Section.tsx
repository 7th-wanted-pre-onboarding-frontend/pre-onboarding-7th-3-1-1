import styled from 'styled-components';

type Props = {
  height?: string;
};

const Section = styled.section<Props>`
  width: 100%;
  height: ${({ height }) => height};
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
`;

export default Section;
