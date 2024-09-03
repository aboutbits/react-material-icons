import React from 'react'
import { IconProps } from './types'

const IconLocalFloristRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-540q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm0 180q-39 0-70.5-21.5T364-438q-5 0-9 .5t-9 .5q-52 0-89-37t-37-89q0-21 7-40.5t21-36.5q-13-17-20-36.5t-7-40.5q0-52 36.5-89t88.5-37q5 0 9 .5t9 .5q14-35 45.5-56.5T480-920q39 0 70.5 21.5T596-842q5 0 9-.5t9-.5q52 0 88.5 37t36.5 89q0 21-6.5 40.5T712-640q13 17 20 36.5t7 40.5q0 52-36.5 89T614-437q-5 0-9-.5t-9-.5q-14 35-45.5 56.5T480-360Zm0 279q0-126 76-223t193-126q19-5 37.5-3.5T819-418q12 13 13.5 31t-3.5 35q-28 118-125.5 194.5T480-81Zm0 1q0-126-76-223T211-429q-19-5-37.5-3.5T141-417q-12 13-13.5 31t3.5 35q28 118 125.5 194.5T480-80Z" />
  </svg>
)

export { IconLocalFloristRoundedFilled as default }
