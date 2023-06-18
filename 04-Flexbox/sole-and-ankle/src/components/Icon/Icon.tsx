import {FC} from 'react';
import styled from 'styled-components';
import {Search, Menu, ShoppingBag, ChevronDown} from 'react-feather';

const icons: {[key: string]: FC} = {
  search: Search,
  menu: Menu,
  'shopping-bag': ShoppingBag,
  'chevron-down': ChevronDown,
};

interface IconProps {
  id: keyof typeof icons;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

const Icon: FC<IconProps> = ({id, color, size, strokeWidth, ...delegated}) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{strokeWidth?: number}>`
  & > svg {
    display: block;
    stroke-width: ${p => p.strokeWidth}px;
  }
`;

export default Icon;
