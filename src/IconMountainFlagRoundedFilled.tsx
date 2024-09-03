import React from 'react'
import { IconProps } from './types'

const IconMountainFlagRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m281-487 33-68q10-21 29.5-33t42.5-12h54v-240q0-17 11.5-28.5T480-880h208q11 0 17 9.5t1 19.5l-22 42q-2 5-2 9t2 9l22 42q5 10-1 19.5t-17 9.5H520v120h51q23 0 41.5 12t29.5 32l35 70-120 80-77-39-77 39-122-81ZM209-80q-45 0-68.5-37.5T137-195l108-220 152 101 83-41 83 41 150-99 109 217q20 40-3.5 78T750-80H209Z" />
  </svg>
)

export { IconMountainFlagRoundedFilled as default }
