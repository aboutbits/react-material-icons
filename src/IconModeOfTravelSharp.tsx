import React from 'react'
import { IconProps } from './types'

const IconModeOfTravelSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80Q315-220 237.5-339T160-570q0-137 96.5-223.5T480-880q127 0 223.5 89T800-552l84-84 56 56-180 180-180-180 56-56 84 84q0-109-69.5-178.5T480-800q-101 0-170.5 67T240-569q0 83 59 177t181 206q20-18 37-35l34-34q-5-11-8-22t-3-23q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29q-8 0-14.5-1t-13.5-3q-29 30-61.5 61T480-80Z" />
  </svg>
)

export { IconModeOfTravelSharp as default }
