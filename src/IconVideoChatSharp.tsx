import React from 'react'
import { IconProps } from './types'

const IconVideoChatSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-400h320v-120l80 80v-240l-80 80v-120H280v320ZM80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
  </svg>
)

export { IconVideoChatSharp as default }
