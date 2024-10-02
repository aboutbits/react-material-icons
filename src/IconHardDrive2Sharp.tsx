import React from 'react'
import { IconProps } from './types'

export const IconHardDrive2Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-200q17 0 28.5-11.5T600-240q0-17-11.5-28.5T560-280q-17 0-28.5 11.5T520-240q0 17 11.5 28.5T560-200Zm120 0q17 0 28.5-11.5T720-240q0-17-11.5-28.5T680-280q-17 0-28.5 11.5T640-240q0 17 11.5 28.5T680-200ZM120-440v-440h720v440h-80v-360H200v360h-80Zm80 80v200h560v-200H200ZM120-80v-360h720v360H120Zm80-360h560-560Zm0 80h560-560Z" />
  </svg>
)
