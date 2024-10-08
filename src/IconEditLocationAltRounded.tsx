import React from 'react'
import { IconProps } from './types'

const IconEditLocationAltRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-552q0-150 96.5-239T480-880h10q17 0 28.5 11.5T530-840q0 17-11.5 28.5T490-800h-10q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186q122-112 181-203.5T720-552q0-17 11.5-28.5T760-592q17 0 28.5 11.5T800-552q0 94-68 201.5T533-127q-11 10-25 15t-28 5q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552Zm320 0Zm56 20 222-222q6-6 6-14t-6-14l-56-56q-6-6-14-6t-14 6L452-616q-6 6-9 13.5t-3 15.5v37q0 13 8.5 21.5T470-520h37q8 0 15.5-3t13.5-9Zm250-278q6 6 14 6t14-6l14-14q11-11 11-28t-11-28l-28-28q-11-11-28-11t-28 11l-14 14q-6 6-6 14t6 14l56 56Z" />
  </svg>
)

export { IconEditLocationAltRounded as default }
