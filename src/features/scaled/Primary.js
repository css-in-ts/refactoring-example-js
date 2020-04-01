import React from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const Primary = () => {

  const fill = makeColor({ scalable: { color: 'primary', scale: 2 } })
  const border = makeColor({ scalable: { color: 'accent' } })

  return <Swatch fill={fill} border={border} />

}