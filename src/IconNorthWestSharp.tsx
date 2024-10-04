import React from 'react'
import { IconProps } from './types.js'

export const IconNorthWestSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M744-160 280-624v264h-80v-400h400v80H336l464 464-56 56Z" />
  </svg>
)
