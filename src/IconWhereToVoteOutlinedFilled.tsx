import React from 'react'
import { IconProps } from './types'

const IconWhereToVoteOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m438-426 198-198-57-57-141 141-56-56-57 57 113 113Zm42 346Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" />
  </svg>
)

export { IconWhereToVoteOutlinedFilled as default }
