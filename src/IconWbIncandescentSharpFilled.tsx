import React from 'react'
import { IconProps } from './types'

const IconWbIncandescentSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-80v-120h80v120h-80ZM80-440v-80h120v80H80Zm680 0v-80h120v80H760Zm-40 276-84-84 56-56 84 84-56 56Zm-480 0-56-56 84-84 56 56-84 84Zm240-116q-83 0-141.5-58.5T280-480q0-48 21.5-89.5T360-640v-200h240v200q37 29 58.5 70.5T680-480q0 83-58.5 141.5T480-280Zm-40-396q10-2 20-3t20-1q10 0 20 1t20 3v-84h-80v84Z" />
  </svg>
)

export { IconWbIncandescentSharpFilled as default }
