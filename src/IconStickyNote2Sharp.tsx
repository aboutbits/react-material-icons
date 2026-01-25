import React from 'react'
import { IconProps } from './types.js'

export const IconStickyNote2Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200h360v-200h200v-360H200v560Zm-80 80v-720h720v480L600-120H120Zm160-280v-80h200v80H280Zm0-160v-80h400v80H280Zm-80 360v-560 560Z" />
  </svg>
)
