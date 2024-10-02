import React from 'react'
import { IconProps } from './types'

export const IconQuickreplyOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-40v-200h-80v-240h200l-68 160h88L760-40ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v240H600v320H240L80-80Z" />
  </svg>
)
