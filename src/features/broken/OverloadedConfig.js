import React from 'react'
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const OverloadedConfig = () => {

  const fill = makeColor({ scalable: { color: 'primary', scale: 1 }, fixed: 'dark' })
  const border = makeColor({ fixed: 'light', custom: '#EE7D0F'})

  return <Swatch fill={fill} border={border} />

}

export const OverloadedConfigAgain = () => {

  const fill = makeColor({ scalable: { color: 'primary', scale: 1 }, custom: '#0508EE' })
  const border = makeColor({ fixed: 'light', custom: '#fffff'})

  return <Swatch fill={fill} border={border} />

}