import React from 'react'
import { IconProps } from './types'

const IconMoveSelectionLeftOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-240v-480h480v480H80Zm80-80h320v-320H160v320Zm480-320v-80h80v80h-80Zm0 400v-80h80v80h-80Zm160-400v-80h80v80h-80Zm0 200v-80h80v80h-80Zm0 200v-80h80v80h-80ZM320-480Z" />
  </svg>
)

export { IconMoveSelectionLeftOutlined as default }
