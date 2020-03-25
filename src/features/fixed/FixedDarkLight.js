import React from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const FixedDarkLight = () => {

  const fill = makeColor({ fixed: 'dark' })
  const border = makeColor({ fixed: 'light' })

  return <Swatch fill={fill} border={border} />

}