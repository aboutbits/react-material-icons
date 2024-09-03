import React from 'react'
import { IconProps } from './types'

const IconEarbudsBatteryOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-680v-40h80v40h40q17 0 28.5 11.5T880-640v360q0 17-11.5 28.5T840-240H680q-17 0-28.5-11.5T640-280v-360q0-17 11.5-28.5T680-680h40ZM215-240q-57 0-96-39t-39-96v-265q0-33 23.5-56.5T160-720q33 0 56.5 23.5T240-640q0 33-23.5 56.5T160-560q-5 0-10-1t-10-3v189q0 32 21.5 53.5T215-300q32 0 53.5-21.5T290-375v-210q0-57 39-96t96-39q57 0 96 39t39 96v265q0 33-23.5 56.5T480-240q-33 0-56.5-23.5T400-320q0-33 23.5-56.5T480-400q5 0 10 1t10 3v-189q0-32-21.5-53.5T425-660q-32 0-53.5 21.5T350-585v210q0 57-39 96t-96 39Z" />
  </svg>
)

export { IconEarbudsBatteryOutlinedFilled as default }
