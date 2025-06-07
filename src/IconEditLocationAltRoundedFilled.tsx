import React from 'react'
import { IconProps } from './types.js'

export const IconEditLocationAltRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-107q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880h15q7 0 14 1 25 2 33 26.5T530-808L383-660q-11 11-17 25.5t-6 30.5v84q0 33 23.5 56.5T440-440h84q16 0 30.5-6t25.5-17l147-147q19-19 43-11t28 33q1 9 1.5 18t.5 18q0 94-68 201.5T533-127q-11 10-25 15t-28 5Zm56-425 222-222q6-6 6-14t-6-14l-56-56q-6-6-14-6t-14 6L452-616q-6 6-9 13.5t-3 15.5v37q0 13 8.5 21.5T470-520h37q8 0 15.5-3t13.5-9Zm250-278q6 6 14 6t14-6l14-14q11-11 11-28t-11-28l-28-28q-11-11-28-11t-28 11l-14 14q-6 6-6 14t6 14l56 56Z" />
  </svg>
)
