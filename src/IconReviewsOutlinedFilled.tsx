import React from 'react'
import { IconProps } from './types'

const IconReviewsOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm283-310 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z" />
  </svg>
)

export { IconReviewsOutlinedFilled as default }
