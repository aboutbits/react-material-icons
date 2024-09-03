import React from 'react'
import { IconProps } from './types'

const IconEditRoadSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-475v-325h80v245l-80 80ZM160-160v-640h80v640h-80Zm240-480v-160h80v160h-80Zm0 240v-160h80v160h-80Zm0 240v-160h80v160h-80Zm160 0v-123l263-262 123 122-263 263H560Zm300-263-37-37 37 37ZM620-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
  </svg>
)

export { IconEditRoadSharp as default }
