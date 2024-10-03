import React from 'react'
import { IconProps } from './types.js'

export const IconLowDensityOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-400h80v320h560v-560H440v-80h400v720H120Zm0-480v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-160v-80h80v80h-80Z" />
  </svg>
)
