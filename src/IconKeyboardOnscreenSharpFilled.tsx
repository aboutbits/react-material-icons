import React from 'react'
import { IconProps } from './types.js'

export const IconKeyboardOnscreenSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280h320v-80H320v80ZM200-400h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM80-160v-640h800v640H80Zm80-440h640v-120H160v120Z" />
  </svg>
)
