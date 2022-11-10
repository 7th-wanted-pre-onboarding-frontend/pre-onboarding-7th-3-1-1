import styled from 'styled-components';

type Props = {
  size: number;
  backgroundColor?: string;
  position?: string;
  top?: string;
  right?: string;
  zIndex?: number;
  transform?: string;
};

const CircleButton = styled.button<Props>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  z-index: ${({ zIndex }) => zIndex};
  transform: ${({ transform }) => transform};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

export default CircleButton;
