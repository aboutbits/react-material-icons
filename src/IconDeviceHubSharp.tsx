import React from 'react'
import { IconProps } from './types'

const IconDeviceHubSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-200h160l160-160v-128q-36-13-58-43.5T360-720q0-50 35-85t85-35q50 0 85 35t35 85q0 38-22 68.5T520-608v128l160 160h160v200H640v-122L480-402 320-242v122H120Z" />
  </svg>
)

export { IconDeviceHubSharp as default }
