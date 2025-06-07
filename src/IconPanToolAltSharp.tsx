import React from 'react'
import { IconProps } from './types.js'

export const IconPanToolAltSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M341-120 46-483l71-68 163 114v-443h80v597l-111-78 130 161h381v-400h80v480H341Zm99-320v-280h80v280h-80Zm160 0v-240h80v240h-80Zm-40 80Z" />
  </svg>
)
