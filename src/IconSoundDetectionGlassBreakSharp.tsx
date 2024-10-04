import React from 'react'
import { IconProps } from './types.js'

export const IconSoundDetectionGlassBreakSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm80-640v360l180-181 160 160 220-247v-92H200Zm0 560h560v-348L540-301 380-461 200-280v80Z" />
  </svg>
)
