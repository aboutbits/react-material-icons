import React from 'react'
import { IconProps } from './types.js'

export const IconEarbudsBatterySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-240v-440h80v-40h80v40h80v440H640Zm80-80h80-80Zm-505 80q-57 0-96-39t-39-96v-345h160v160H140v185q0 32 21.5 53.5T215-300q32 0 53.5-21.5T290-375v-210q0-57 39-96t96-39q57 0 96 39t39 96v345H400v-160h100v-185q0-32-21.5-53.5T425-660q-32 0-53.5 21.5T350-585v210q0 57-39 96t-96 39Zm505-80h80v-280h-80v280Z" />
  </svg>
)
