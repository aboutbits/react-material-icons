import React from 'react'
import { IconProps } from './types.js'

export const IconInkEraserSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M690-240h190v80H610l80-80Zm-500 80L48-302l552-572 312 312-392 402H190Z" />
  </svg>
)
