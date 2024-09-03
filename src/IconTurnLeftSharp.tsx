import React from 'react'
import { IconProps } from './types'

const IconTurnLeftSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-160v-360H272l64 64-56 56-160-160 160-160 56 56-64 64h408v440h-80Z" />
  </svg>
)

export { IconTurnLeftSharp as default }
