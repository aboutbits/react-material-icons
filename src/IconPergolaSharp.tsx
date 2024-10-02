import React from 'react'
import { IconProps } from './types'

export const IconPergolaSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-760h80v80h560v-80h80v760h-80v-440H200v440h-80Zm80-520h560v-80H200v80Zm240 520v-120H320v-80h320v80H520v120h-80ZM200-640v-80 80Z" />
  </svg>
)
