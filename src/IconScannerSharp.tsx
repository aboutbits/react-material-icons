import React from 'react'
import { IconProps } from './types'

const IconScannerSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M704-480 140-684l28-76 672 246v354H120v-320h584Zm56 240v-160H200v160h560Zm-360-40h320v-80H400v80Zm-200 40v-160 160Zm40-40h80v-80h-80v80Z" />
  </svg>
)

export { IconScannerSharp as default }
