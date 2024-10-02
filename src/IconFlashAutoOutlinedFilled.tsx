import React from 'react'
import { IconProps } from './types'

export const IconFlashAutoOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-80v-320H80v-480h400l-80 280h160L200-80Zm385-440 135-360h64l137 360h-62l-32-92H679l-32 92h-62Zm112-144h110l-53-150h-2l-55 150Z" />
  </svg>
)
