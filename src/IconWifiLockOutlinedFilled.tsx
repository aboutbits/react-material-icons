import React from 'react'
import { IconProps } from './types.js'

export const IconWifiLockOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120 0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600l-99 99q-23-11-48.5-16.5T761-523q-101 0-172 71t-71 172q0 26 5.5 51.5T540-180l-60 60Zm200 0q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40Z" />
  </svg>
)
