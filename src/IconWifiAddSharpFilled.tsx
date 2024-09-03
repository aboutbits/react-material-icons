import React from 'react'
import { IconProps } from './types'

const IconWifiAddSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120 0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600l-99 99q-23-11-48.5-16.5T761-523q-101 0-172 71t-71 172q0 26 5.5 51.5T540-180l-60 60Zm240 0v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
  </svg>
)

export { IconWifiAddSharpFilled as default }
