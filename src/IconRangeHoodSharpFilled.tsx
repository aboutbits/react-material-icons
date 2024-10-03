import React from 'react'
import { IconProps } from './types.js'

export const IconRangeHoodSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m122-480 158-160v-200h400v200l160 160H122ZM80-160v-240h800v240H80Zm320-132h160v-60H400v60Z" />
  </svg>
)
