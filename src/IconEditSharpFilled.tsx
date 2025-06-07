import React from 'react'
import { IconProps } from './types.js'

export const IconEditSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-170l585-583 167 171-582 582H120Zm584-528 56-56-56-56-56 56 56 56Z" />
  </svg>
)
