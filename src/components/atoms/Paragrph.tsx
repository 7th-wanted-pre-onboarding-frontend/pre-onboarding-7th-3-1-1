import styled from 'styled-components';

type Props = {
  position: string;
  top: string;
  left: string;
  zIndex: number;
  transform: string;
  display: string;
  alignItems: string;
  gap: string;
};

const Paragraph = styled.p<Partial<Props>>`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  z-index: ${({ zIndex }) => zIndex};
  transform: ${({ transform }) => transform};
  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
`;

export default Paragraph;
