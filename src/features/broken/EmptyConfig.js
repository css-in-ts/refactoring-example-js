import React from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const EmptyConfig = () => {

  const fill = makeColor({})
  const border = makeColor({})

  return <Swatch fill={fill} border={border} />

}