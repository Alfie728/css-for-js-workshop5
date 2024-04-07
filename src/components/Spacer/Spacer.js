import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';
function getHeight({ axis, size }) {
  return axis === 'horizontal' ? 1 : size;
}
function getWidth({ axis, size }) {
  return axis === 'vertical' ? 1 : size;
}

export const Spacer = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;
export const DesktopSpacer = styled(Spacer)`
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;