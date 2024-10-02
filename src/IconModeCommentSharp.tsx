import React from 'react'
import { IconProps } from './types'

export const IconModeCommentSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-240v-640h800v800L720-240H80Zm80-80h594l46 45v-525H160v480Zm0 0v-480 480Z" />
  </svg>
)
