import React from 'react'
import { IconProps } from './types.js'

export const IconSwipeRightAltOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-280q-83 0-141.5-58.5T160-480q0-83 58.5-141.5T360-680q73 0 127.5 45.5T556-520h171l-63-64 56-56 160 160-160 160-57-56 64-64H556q-14 69-68.5 114.5T360-280Z" />
  </svg>
)