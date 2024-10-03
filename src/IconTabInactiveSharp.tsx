import React from 'react'
import { IconProps } from './types.js'

export const IconTabInactiveSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80v-160H80v-160h80v80h80v-400h400v-80h-80v-80h160v160h160v640H240Zm80-80h480v-480H320v480Zm0 0v-480 480ZM80-480v-160h80v160H80Zm0-240v-160h160v80h-80v80H80Zm240-80v-80h160v80H320Z" />
  </svg>
)
