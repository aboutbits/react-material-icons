import React from 'react'
import { IconProps } from './types.js'

export const IconTvNextOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m780-60-60-60 120-120-120-120 60-60 180 180L780-60Zm-460-60v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v280H680v280h-80v80H320Z" />
  </svg>
)