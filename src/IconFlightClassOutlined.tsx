import React from 'react'
import { IconProps } from './types.js'

export const IconFlightClassOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-440q-33 0-56.5-23.5T480-520v-200q0-33 23.5-56.5T560-800h80q33 0 56.5 23.5T720-720v200q0 33-23.5 56.5T640-440h-80Zm0-80h80v-200h-80v200ZM380-240q-27 0-48-15.5T303-297L200-640v-160h80v160l100 320h340v80H380Zm-60 120v-80h400v80H320Zm240-600h80-80Z" />
  </svg>
)
