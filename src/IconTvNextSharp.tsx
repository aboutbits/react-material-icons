import React from 'react'
import { IconProps } from './types.js'

export const IconTvNextSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m780-60-60-60 120-120-120-120 60-60 180 180L780-60Zm-460-60v-80H80v-640h800v360h-80v-280H160v480h520v80h-80v80H320ZM160-280v-480 480Z" />
  </svg>
)
