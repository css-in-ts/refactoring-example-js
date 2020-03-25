import React from 'react'
import styled from "styled-components";


const StyledDivider = styled.h1`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 6;
  text-align: center;
  border-bottom-style: solid;
  border-bottom-color: ${({ color }) => color };
  color: ${({ color }) => color };
`

export const Divider = ({ content, color }) => (
  <StyledDivider color={color}>{content}</StyledDivider>
)
