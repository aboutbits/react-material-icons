import React from 'react'
import { IconProps } from './types.js'

export const IconMoneySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-320h200v-320H560v320Zm80-80v-160h40v160h-40Zm-320 80h200v-320H320v320Zm80-80v-160h40v160h-40Zm-200 80h80v-320h-80v320ZM80-160v-640h800v640H80Z" />
  </svg>
)
