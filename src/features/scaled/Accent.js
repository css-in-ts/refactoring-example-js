import React from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const Accent = () => {

  const fill = makeColor({ scalable: { color: 'accent', scale: 3 } })
  const border = makeColor({ scalable: { color: 'secondary' } })

  return <Swatch fill={fill} border={border} />

}