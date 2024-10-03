import React from 'react'
import { IconProps } from './types.js'

export const IconP2pSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-720h360v280h-80v-80H160v320h280v200H80Zm440 80v-280h80v80h200v-320H520v-200h360v720H520ZM280-440v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z" />
  </svg>
)
