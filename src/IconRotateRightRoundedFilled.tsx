import React from 'react'
import { IconProps } from './types'

const IconRotateRightRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M790-478q-12 0-23.5-8.5T752-508q-5-19-12.5-37.5T722-581q-7-11-5-24.5t11-22.5q15-14 34.5-12t29.5 19q13 22 23 45t16 48q5 20-7.5 35T790-478ZM522-130q0-12 8.5-23.5T552-168q19-5 37.5-12.5T625-198q11-7 24.5-5t22.5 11q14 15 12 34.5T665-128q-23 13-46 22.5T572-89q-20 5-35-7t-15-34Zm206-118q-9-8-11-22t5-25q10-17 17.5-35.5T752-368q3-13 14-21.5t24-8.5q22 0 34 15t7 35q-7 24-16.5 47T792-255q-10 17-29.5 19T728-248ZM393-90q-119-32-195-128t-76-220q0-150 105-255t255-105h6l-35-35q-11-11-11-28t12-29q11-11 28-11t29 11l103 104q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L510-626q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36h-8q-117 0-198.5 81.5T202-438q0 97 59 171.5T412-168q13 3 21.5 14t8.5 24q0 21-14.5 33T393-90Z" />
  </svg>
)

export { IconRotateRightRoundedFilled as default }
