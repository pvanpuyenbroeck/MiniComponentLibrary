import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Sizes = {
  small:{
    iconSize:'11px',
    height:'16px'
  },
  large:{
    iconSize:'14px',
    height: '21px'
  }
}

const Input = styled.input`
    border: none;
    display: inline-block;
    height: ${(props) => props.style.height};
    width: 100%;
    outline: none;
    font-family: Roboto;
    color: ${COLORS.gray700};
    font &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${COLORS.gray500};
    }
`;
const Wrapper = styled.div`
    width: ${(props) => props.width + "px"};
    border-bottom: 1px solid black;
    display: flex;
    &:focus-within{
        outline: default;
    }
`;

const IconWrapper = styled.div`
  display: inline-block;
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const dimensions = Sizes[size];
  return (
      <Wrapper width={width}>
          <IconWrapper>
          <VisuallyHidden>{label}</VisuallyHidden>
              <Icon id={icon} size={dimensions.iconSize}/>
          </IconWrapper>
          <Input width={width} style={dimensions} placeholder={placeholder}></Input>
      </Wrapper>
  );
};  

export default IconInput;
