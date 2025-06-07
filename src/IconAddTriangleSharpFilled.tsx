import React from 'react'
import { IconProps } from './types.js'

export const IconAddTriangleSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m40-120 440-760 440 760H40Zm400-120h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z" />
  </svg>
)
