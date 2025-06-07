import React from 'react'
import { IconProps } from './types.js'

export const IconWeekendSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-160v-440h120v-200h640v200h120v440H40Zm240-240h400v-200h40v-120H240v120h40v200ZM120-240h720v-280h-80v200H200v-200h-80v280Zm360-80Zm0-80Zm0 80Z" />
  </svg>
)
