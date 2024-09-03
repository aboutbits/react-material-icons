import React from 'react'
import { IconProps } from './types'

const IconEditLocationSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M340-420h58l156-157-57-57-157 156v58Zm243-186 39-39-57-57-39 39 57 57ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" />
  </svg>
)

export { IconEditLocationSharpFilled as default }
