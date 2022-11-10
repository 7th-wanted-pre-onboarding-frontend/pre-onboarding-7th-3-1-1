import styled from 'styled-components';

type Props = {
  isActivated?: boolean;
};

const SickItemWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  gap: 8px;
  cursor: pointer;
  background-color: ${(props) => props.isActivated && 'rgb(248, 249, 250)'};

  &:hover {
    background-color: #f8f9fa !important;
  }
`;

export default SickItemWrapper;
