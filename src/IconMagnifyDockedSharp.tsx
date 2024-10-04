import React from 'react'
import { IconProps } from './types.js'

export const IconMagnifyDockedSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm80-160h640v-400H160v400Zm400-80h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z" />
  </svg>
)
