import React from 'react'
import { IconProps } from './types'

const IconWrongLocationRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-880q10 0 19.5.5T520-877v81q-10-2-20-3t-20-1q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186q122-112 181-203.5T720-552q0-2-.5-4t-.5-4h80q0 2 .5 4t.5 4q0 94-68 201T533-127q-11 10-25 15t-28 5q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880Zm0 320Zm279-162 56 56q11 11 28 11t28-11q11-11 11-28t-11-28l-56-56 56-56q11-11 11-28t-11-28q-11-11-28-11t-28 11l-56 56-56-56q-11-11-28-11t-28 11q-11 11-11 28t11 28l56 56-56 56q-11 11-11 28t11 28q11 11 28 11t28-11l56-56ZM480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Z" />
  </svg>
)

export { IconWrongLocationRounded as default }
