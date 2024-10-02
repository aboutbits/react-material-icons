import React from 'react'
import { IconProps } from './types'

export const IconSwipeDownAltRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-97q-8 0-15-2.5t-13-8.5L348-212q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l35 35v-171q-69-14-114.5-68.5T280-600q0-83 58.5-141.5T480-800q83 0 141.5 58.5T680-600q0 73-45.5 127.5T520-404v171l36-36q11-11 27.5-11t28.5 12q11 11 11 28t-11 28L508-108q-6 6-13 8.5T480-97Z" />
  </svg>
)
