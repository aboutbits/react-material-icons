import React from 'react'
import { IconProps } from './types.js'

export const IconFolderOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m880-193-80-80v-367H434l-80-80-80-80h114l80 80h412v527ZM819-28 687-160H80v-640h80l80 80h-80v480h447L28-820l56-56L876-84l-57 56ZM368-480Zm209-17Z" />
  </svg>
)
