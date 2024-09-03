import React from 'react'
import { IconProps } from './types'

const IconHeadphonesBatteryOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240h-80q-33 0-56.5-23.5T80-320v-160q0-100 70-170t170-70q100 0 170 70t70 170v160q0 33-23.5 56.5T480-240h-80v-200h100v-40q0-75-52.5-127.5T320-660q-75 0-127.5 52.5T140-480v40h100v200Zm480-440v-40h80v40h40q17 0 28.5 11.5T880-640v360q0 17-11.5 28.5T840-240H680q-17 0-28.5-11.5T640-280v-360q0-17 11.5-28.5T680-680h40Zm0 360h80-80Zm0 0h80v-280h-80v280Z" />
  </svg>
)

export { IconHeadphonesBatteryOutlined as default }
