import React from 'react'
import { IconProps } from './types.js'

export const IconGradientSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm320-400v80h80v-80h-80Zm-160 0v80h80v-80h-80Zm80 80v80h80v-80h-80Zm160 0v80h80v-80h-80Zm-320 0v80h80v-80h-80Zm400-80v80h80v80h80v-80h-80v-80h-80ZM280-360v80h-80v80h80v-80h80v80h80v-80h80v80h80v-80h80v80h80v-80h-80v-80h-80v80h-80v-80h-80v80h-80v-80h-80Zm480-160v80-80Zm0 160v80-80Z" />
  </svg>
)
