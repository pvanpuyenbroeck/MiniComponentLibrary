import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const Selector = styled.select`
  /* display: none; */
    border:none;
    appearance: none; 
    opacity: 0;
    position:absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;

    &::focus{
      outline: olive;
    }
  `;

  const Selected = styled.div`
    display: flex;
      background-color: ${COLORS.transparentGray15};
      padding: 12px 16px;
      border-radius: 4px;
      color: ${COLORS.gray700};
      width: max-content;
  `;

  const Wrapper = styled.div`
      position: relative;
      display: flex;
  `;

  return (
      <Wrapper>
          <Selected>
              {displayedValue}
              <Icon id='chevron-down' size='20'></Icon>
          </Selected>
          <Selector value={value} onChange={onChange}>
              {children}
          </Selector>
      </Wrapper>
  );
};

export default Select;
