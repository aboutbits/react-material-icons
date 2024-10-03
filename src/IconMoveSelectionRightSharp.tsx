import React from 'react'
import { IconProps } from './types.js'

export const IconMoveSelectionRightSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-240v-480h480v480H400Zm80-80h320v-320H480v320Zm-240 80v-80h80v80h-80Zm0-400v-80h80v80h-80ZM80-240v-80h80v80H80Zm0-200v-80h80v80H80Zm0-200v-80h80v80H80Zm560 160Z" />
  </svg>
)
