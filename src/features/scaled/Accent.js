import React from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const Accent = () => {

  const fill = makeColor({ scalable: { color: 'primary' } })
  const border = makeColor({ scalable: { color: 'accent', scale: 2 } })

  return <Swatch fill={fill} border={border} />

}