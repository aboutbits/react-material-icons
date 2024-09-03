import React from 'react'
import { IconProps } from './types'

const IconPhotoCameraFrontSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-640h206l74-80h240l74 80h206v640H80Zm80-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240ZM320-280h320v-22q0-45-44-71.5T480-400q-72 0-116 26.5T320-302v22Zm160-160q33 0 56.5-23.5T560-520q0-33-23.5-56.5T480-600q-33 0-56.5 23.5T400-520q0 33 23.5 56.5T480-440Z" />
  </svg>
)

export { IconPhotoCameraFrontSharp as default }
