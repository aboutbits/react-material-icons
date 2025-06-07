import React from 'react'
import { IconProps } from './types.js'

export const IconMoveSelectionUpSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-400v-480h480v480H240Zm80-80h320v-320H320v320Zm320 240v-80h80v80h-80Zm-400 0v-80h80v80h-80ZM640-80v-80h80v80h-80Zm-200 0v-80h80v80h-80Zm-200 0v-80h80v80h-80Zm240-560Z" />
  </svg>
)
