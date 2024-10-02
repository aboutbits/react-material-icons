import React from 'react'
import { IconProps } from './types'

export const IconCopyAllSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-220v-80h80v80h-80Zm0-140v-80h80v80h-80Zm0-140v-80h80v80h-80ZM260-80v-80h80v80h-80Zm20-160v-640h520v640H280ZM400-80v-80h80v80h-80Zm-280 0v-80h80v80h-80Zm420 0v-80h80v80h-80ZM120-640v-80h80v80h-80Z" />
  </svg>
)
