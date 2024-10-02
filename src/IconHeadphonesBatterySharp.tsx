import React from 'react'
import { IconProps } from './types'

export const IconHeadphonesBatterySharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240H80v-240q0-100 70-170t170-70q100 0 170 70t70 170v240H400v-200h100v-40q0-75-52.5-127.5T320-660q-75 0-127.5 52.5T140-480v40h100v200Zm400 0v-440h80v-40h80v40h80v440H640Zm80-80h80-80Zm0 0h80v-280h-80v280Z" />
  </svg>
)
