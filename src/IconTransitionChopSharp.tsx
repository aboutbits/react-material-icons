import React from 'react'
import { IconProps } from './types.js'

export const IconTransitionChopSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm80-138 462-120-78-302H160v422Zm95 58h545v-480H627l93 360-465 120Zm-95-480Z" />
  </svg>
)
