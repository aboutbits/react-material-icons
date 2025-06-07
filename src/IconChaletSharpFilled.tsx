import React from 'react'
import { IconProps } from './types.js'

export const IconChaletSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M700-520v-48l-30 30-28-28 58-58v-36h-36l-58 58-28-28 30-30h-48v-40h48l-30-30 28-29 58 58h36v-35l-58-58 28-28 30 30v-48h40v48l30-30 28 28-58 58v36h36l58-58 28 28-30 30h48v40h-48l30 30-28 28-58-58h-36v36l58 58-28 28-30-30v48h-40ZM200-160v-188l-44 44-56-56 300-300 300 300-56 57-44-44v187H440v-200h-80v200H200Z" />
  </svg>
)
