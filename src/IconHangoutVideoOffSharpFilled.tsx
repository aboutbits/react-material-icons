import React from 'react'
import { IconProps } from './types'

export const IconHangoutVideoOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-28 686-160H80v-640h80l24 24v112L28-820l56-56L876-84l-56 56Zm60-166L720-354v-286L560-514v-124H436L274-800h606v606ZM240-320h286L240-606v286Z" />
  </svg>
)
