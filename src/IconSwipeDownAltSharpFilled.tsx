import React from 'react'
import { IconProps } from './types.js'

export const IconSwipeDownAltSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80 320-240l56-57 64 64v-171q-69-14-114.5-68.5T280-600q0-83 58.5-141.5T480-800q83 0 141.5 58.5T680-600q0 73-45.5 127.5T520-404v171l64-63 56 56L480-80Z" />
  </svg>
)
