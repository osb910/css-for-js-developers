import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const Select = ({label, id, value, onChange, children}) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect id={id} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentational>
        {displayedValue}
        <IconWrapper style={{'--size': 24 + 'px'}}>
          <Icon id='chevron-down' strokeWidth={1} size={24} />
        </IconWrapper>
      </Presentational>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  inline-size: max-content;
  isolation: isolate;
`;

const NativeSelect = styled.select`
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  z-index: 2;
  inline-size: 100%;
  block-size: 100%;
  opacity: 0;
  appearance: none;
  -webkit-appearance: none;
`;

const Presentational = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding-block: 0.75em;
  padding-inline-start: 1em;
  padding-inline-end: 2.5em;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  inset-block-start: 0;
  inset-block-end: 0;
  inset-inline-end: 10px;
  margin: auto;
  inline-size: var(--size);
  block-size: var(--size);
  pointer-events: none;
`;

export default Select;
