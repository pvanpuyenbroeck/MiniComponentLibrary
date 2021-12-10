/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
    large: {
        "--height": "24px",
        "--padding": "4px",
    },
    medium: {
        "--height": "12px",
        "--padding": "0px",
    },
    small: { "--height": "8px", "--padding":  "0px" }
};

const ProgressWrapper = styled.div`
    width: 185px;
    height: var(--height);
    padding: var(--padding);
    background: ${COLORS.transparentGray15};
    border-radius: 8px;
`;

const Bar = styled.div`
    width: ${(props) => props.value + "%"};
    height: 100%;
    background-color: ${COLORS.primary};
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: ${(props) => (props.value > "99" ? "8px" : "0px")};
    border-bottom-right-radius: ${(props) => (props.value > "99" ? "8px" : "0px")};
`;

let style = {
  height: '12px',
  padding: '0px'
} 

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
      <ProgressWrapper style={styles}>
          <Bar role='progressbar' value={value} aria-valuenow={value} aria-valuemin='0' aria-valuemax='100'></Bar>
      </ProgressWrapper>
  );
};

export default ProgressBar;
