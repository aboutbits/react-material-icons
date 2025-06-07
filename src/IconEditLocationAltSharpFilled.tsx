import React from 'react'
import { IconProps } from './types.js'

export const IconEditLocationAltSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q27 0 53.5 4.5T585-863L360-637v197h197l225-225q9 26 13.5 54t4.5 59q0 100-79.5 217.5T480-80Zm-40-440v-84l248-248 84 84-248 248h-84Zm360-276-84-84 56-56 84 84-56 56Z" />
  </svg>
)
