import React from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const Secondary = () => {

  const fill = makeColor({ scalable: { color: 'secondary', scale: 3 } })
  const border = makeColor({ scalable: { color: 'primary' } })

  return <Swatch fill={fill} border={border} />

}