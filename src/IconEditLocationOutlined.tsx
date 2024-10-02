import React from 'react'
import { IconProps } from './types'

export const IconEditLocationOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M340-420h58l156-157-57-57-157 156v58Zm243-186 28-28q5-5 5-10.5t-5-10.5l-36-36q-5-5-10.5-5t-10.5 5l-28 28 57 57ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
  </svg>
)
