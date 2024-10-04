import React from 'react'
import { IconProps } from './types.js'

export const IconSwipeRightAltRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-280q-83 0-141.5-58.5T160-480q0-83 58.5-141.5T360-680q73 0 127.5 45.5T556-520h171l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L748-348q-11 11-27.5 11T692-348q-12-12-12-28.5t12-28.5l35-35H556q-14 69-68.5 114.5T360-280Z" />
  </svg>
)