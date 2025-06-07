import React from 'react'
import { IconProps } from './types.js'

export const IconFilter4Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-240v-480 480Zm280-40h80v-400h-80v160h-80v-160h-80v240h160v160Z" />
  </svg>
)
