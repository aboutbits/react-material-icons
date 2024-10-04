import React from 'react'
import { IconProps } from './types.js'

export const IconVideoLabelSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm80-200h640v-360H160v360Z" />
  </svg>
)
