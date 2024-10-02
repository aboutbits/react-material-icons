import React from 'react'
import { IconProps } from './types'

export const IconTabSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240h640v-320H520v-160H160v480Zm-80 80v-640h800v640H80Zm80-80v-480 480Z" />
  </svg>
)
