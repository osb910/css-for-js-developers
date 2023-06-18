import styled, {CSSProperties} from 'styled-components';

interface SpacerProps {
  axis?: 'horizontal' | 'vertical';
  size: string | number;
}

const getHeight = ({axis, size}: SpacerProps): CSSProperties['height'] => {
  return axis === 'horizontal' ? 1 : size;
};
const getWidth = ({axis, size}: SpacerProps): CSSProperties['width'] => {
  return axis === 'vertical' ? 1 : size;
};

const Spacer = styled.span<SpacerProps>`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

export default Spacer;
