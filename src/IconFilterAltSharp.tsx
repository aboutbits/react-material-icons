import React from 'react'
import { IconProps } from './types.js'

export const IconFilterAltSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-160v-280L118-800h724L560-440v280H400Zm80-308 198-252H282l198 252Zm0 0Z" />
  </svg>
)
