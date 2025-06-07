import React from 'react'
import { IconProps } from './types.js'

export const IconRouterSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-320h480v-160h80v160h160v320H120Zm450-510-58-58q26-24 58-38t70-14q38 0 70 14t58 38l-58 58q-14-14-31.5-22t-38.5-8q-21 0-38.5 8T570-630ZM470-730l-56-56q44-44 102-69t124-25q66 0 124 25t102 69l-56 56q-33-33-76.5-51.5T640-800q-50 0-93.5 18.5T470-730ZM240-240h80v-80h-80v80Zm140 0h80v-80h-80v80Zm140 0h80v-80h-80v80Z" />
  </svg>
)
