import React from 'react'
import { IconProps } from './types'

const IconEditRoadSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-475v-325h80v245l-80 80ZM160-160v-640h80v640h-80Zm240-480v-160h80v160h-80Zm0 240v-160h80v160h-80Zm0 240v-160h80v160h-80Zm160 0v-123l263-262 123 122-263 263H560Zm263-224 37-39-37-37-38 38 38 38Z" />
  </svg>
)

export { IconEditRoadSharpFilled as default }
