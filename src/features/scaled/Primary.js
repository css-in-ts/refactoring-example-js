import React from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const Primary = () => {

  const fill = makeColor({ scalable: { color: 'primary', scale: 3 } })
  const border = makeColor({ scalable: { color: 'secondary' } })

  return <Swatch fill={fill} border={border} />

}