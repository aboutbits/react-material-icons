import React from 'react'
import { IconProps } from './types'

export const IconAddTriangleOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m40-120 440-760 440 760H40Zm139-80h602L480-720 179-200Zm261-40h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm40-120Z" />
  </svg>
)
