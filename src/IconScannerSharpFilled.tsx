import React from 'react'
import { IconProps } from './types.js'

export const IconScannerSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M704-480 140-684l28-76 672 246v354H120v-320h584ZM400-280h320v-80H400v80Zm-160 0h80v-80h-80v80Z" />
  </svg>
)
