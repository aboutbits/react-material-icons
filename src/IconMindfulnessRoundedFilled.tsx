import React from 'react'
import { IconProps } from './types.js'

export const IconMindfulnessRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-400q17 0 28.5-11.5T520-440v-200q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v200q0 17 11.5 28.5T480-400Zm120-60q17 0 28.5-11.5T640-500v-100q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600v100q0 17 11.5 28.5T600-460Zm-240-20q17 0 28.5-11.5T400-520v-80q0-17-11.5-28.5T360-640q-17 0-28.5 11.5T320-600v80q0 17 11.5 28.5T360-480ZM280-80q-17 0-28.5-11.5T240-120v-132q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v40q0 17-11.5 28.5T560-80H280Z" />
  </svg>
)
