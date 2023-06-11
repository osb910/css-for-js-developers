import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({label, icon, width = 250, size, ...delegated}) => {
  const STYLES = {
    small: {
      '--fontSize': 14 / 16 + 'rem',
      '--borderThickness': 1 + 'px',
      '--iconSize': 16 + 'px',
      '--inlineSize': width + 'px',
    },
    large: {
      '--fontSize': 18 / 16 + 'rem',
      '--borderThickness': 2 + 'px',
      '--iconSize': 24 + 'px',
      '--inlineSize': width + 'px',
    },
  };
  const style = STYLES[size];
  if (!style) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }
  return (
    <Wrapper style={style}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input {...delegated}></Input>
      <Icon id={icon} size={style['--iconSize']}></Icon>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: flex;
  justify-content: flex-start;
  inline-size: var(--inlineSize);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  & > div:has(svg) {
    position: absolute;
    top: 2px;
    /* pointer-events: none; */
    margin: 0;
    transition: all 250ms ease-out;
  }
`;

const Input = styled.input`
  position: relative;
  inline-size: calc(var(--inlineSize) / 3);
  padding-block: 0.25em;
  padding-inline-start: 1.5em;
  border: none;
  border-block-end: var(--borderThickness) solid ${COLORS.black};
  font-size: var(--fontSize);
  background-color: transparent;
  color: inherit;
  outline-offset: 2px;
  transition: all 250ms ease-out;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    inline-size: 100%;
    outline: 2px solid currentColor;
  }

  &:focus + div:has(svg) {
    scale: 0.85;
    transform: translate(-25%, -75%);
  }

  :where([dir='rtl'], .rtl) &:focus + div:has(svg) {
    transform: translate(25%, -75%);
  }
`;

export default IconInput;
