import React from 'react'
import { IconProps } from './types.js'

export const IconChromecast2OutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-120q-117 0-198.5-81.5T80-400q0-106 68.5-184.5T320-677v-55q0-62 43-105t105-43q34 0 64.5 15t51.5 41l206 260 23-19 111 139-110 87-110-139 23-19-206-260q-10-12-23.5-18.5T468-800q-29 0-48.5 19.5T400-732v55q103 14 171.5 92.5T640-400q0 117-81.5 198.5T360-120Zm0-80q83 0 141.5-58.5T560-400q0-83-58.5-141.5T360-600q-83 0-141.5 58.5T160-400q0 83 58.5 141.5T360-200Z" />
  </svg>
)
