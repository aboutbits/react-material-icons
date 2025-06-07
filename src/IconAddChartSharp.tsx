import React from 'react'
import { IconProps } from './types.js'

export const IconAddChartSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280h80v-280h-80v280Zm160 0h80v-400h-80v400Zm160 0h80v-160h-80v160ZM120-120v-720h440v80H200v560h560v-360h80v440H120Zm560-480v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM480-480Z" />
  </svg>
)
