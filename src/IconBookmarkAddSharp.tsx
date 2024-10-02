import React from 'react'
import { IconProps } from './types'

export const IconBookmarkAddSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-240 200-120v-720h320v80H280v518l200-86 200 86v-278h80v400L480-240ZM280-760h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)
