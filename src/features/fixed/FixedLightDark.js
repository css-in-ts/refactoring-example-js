import React from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const FixedLightDark = () => {

  const fill = makeColor({ fixed: 'light' })
  const border = makeColor({ fixed: 'dark' })

  return <Swatch fill={fill} border={border} />

}