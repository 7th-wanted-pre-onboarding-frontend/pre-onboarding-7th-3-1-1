import styled from 'styled-components';

type Props = {
  selected?: boolean;
  backgroundColor?: string;
  borderRadius?: string;
  position?: string;
  top?: string;
  left?: string;
  zIndex?: number;
  display?: string;
  alignItems?: string;
  flexDirection?: string;
  justifyContent?: string;
  padding?: string;
  boxShadow?: string;
};

const Wrapper = styled.div<Props>`
  width: 100%;
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ boxShadow }) => boxShadow};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

export default Wrapper;
