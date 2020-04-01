import React from 'react'
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const BlueOrange = () => {

  const fill = makeColor({ custom: '#46ee4e'  })
  const border = makeColor({ custom: '#ed44ee' })

  return <Swatch fill={fill} border={border} />

}