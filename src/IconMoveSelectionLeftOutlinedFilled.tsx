import React from 'react'
import { IconProps } from './types.js'

export const IconMoveSelectionLeftOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-240v-480h480v480H80Zm560-400v-80h80v80h-80Zm0 400v-80h80v80h-80Zm160-400v-80h80v80h-80Zm0 200v-80h80v80h-80Zm0 200v-80h80v80h-80Z" />
  </svg>
)
