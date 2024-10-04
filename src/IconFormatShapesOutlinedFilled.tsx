import React from 'react'
import { IconProps } from './types.js'

export const IconFormatShapesOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-40v-240h80v-400H40v-240h240v80h400v-80h240v240h-80v400h80v240H680v-80H280v80H40Zm240-160h400v-80h80v-400h-80v-80H280v80h-80v400h80v80Zm32-120 136-360h64l136 360h-62l-32-92H408l-32 92h-64Zm114-144h108l-52-150h-4l-52 150Z" />
  </svg>
)