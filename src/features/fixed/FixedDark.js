import React from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const FixedDark = () => {

  const fill = makeColor({ fixed: 'dark' })

  return <Swatch fill={fill} border={fill} />

}