import React from "react";
import styled from "styled-components";
import {makeColor} from "../utils/makeColor";

const swatchBackground = makeColor({ custom: '#eeeeee'})

const SwatchWrapper = styled.div`
  border-radius: 1rem;
  background: ${swatchBackground};
  padding: 1rem;
`

const SwatchBorder = styled.div`
  padding: .5rem;
  border-color: ${({ border }) => border};
  padding: 1rem;
  border-style: dotted;
`



export const Swatch = ({ fill, border}) => (
  <SwatchWrapper>
    <SwatchBorder border={border}>
      <div
        style={{
          backgroundColor: fill,
          height: '25px',
          width: '50px',
          borderColor: border,
          borderStyle: 'solid',
          borderRadius: '1rem'
        }}
      />
    </SwatchBorder>
  </SwatchWrapper>
)