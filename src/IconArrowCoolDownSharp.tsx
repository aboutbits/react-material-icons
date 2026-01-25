import React from 'react'
import { IconProps } from './types.js'

export const IconArrowCoolDownSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80 200-360l56-57 184 184v-287h80v287l184-183 56 56L480-80Zm-40-520v-120h80v120h-80Zm0-200v-80h80v80h-80Z" />
  </svg>
)
