/* eslint-disable no-unused-vars */
import React, {useId} from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
  },
  medium: {
    height: 16,
  },
  large: {
    height: 20,
  },
};

const ProgressBar = ({value, size}) => {
  const styles = STYLES[size];
  if (!styles) {
    throw Error(`Unknown size passed to ProgressBar: ${size}`);
  }
  const {height} = styles;
  const id = useId();
  return (
    <Wrapper
      value={value}
      size={size}
      id={`progress-bar-${id}`}
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-labelledby={`progress-bar-${id}`}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{'--width': value + '%', '--height': height + 'px'}}
          size={size}
          value={value}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-inline-size: 160px;
  inline-size: 100%;
  margin-block: 0.25em;
  padding: ${({size}) => size === 'large' && '4px'};
  border-radius: ${({size}) => (size === 'large' ? '8px' : '4px')};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 8px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  inline-size: var(--width);
  background-color: ${COLORS.primary};
  block-size: var(--height);
  border-start-start-radius: 4px;
  border-end-start-radius: 4px;
  box-shadow: 0 2px 5px rgba(128, 128, 128, 0.35) inset;
  transition: width 500ms ease-in-out;
`;

export default ProgressBar;
