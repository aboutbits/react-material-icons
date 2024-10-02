import React from 'react'
import { IconProps } from './types'

export const IconFileSaveOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m836-236-56-57 44-44 56 57-44 44Zm-76-77-80-80v-47h80v127ZM560 0v-80h207L240-607v367h240v80H160v-527L28-820l56-56L880-80V0H560Zm120-520h80v-120L520-880H192l81 80h207v200h200v80Zm-265 88Zm104-122Z" />
  </svg>
)
