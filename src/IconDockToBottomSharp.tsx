import React from 'react'
import { IconProps } from './types'

const IconDockToBottomSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200h560v-120H200v120Zm0-200h560v-360H200v360Zm0 80v120-120Zm-80 200v-720h720v720H120Z" />
  </svg>
)

export { IconDockToBottomSharp as default }
