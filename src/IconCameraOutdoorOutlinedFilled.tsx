import React from 'react'
import { IconProps } from './types'

export const IconCameraOutdoorOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-480l320-240 320 240v80H520q-33 0-56.5 23.5T440-440v160q0 33 23.5 56.5T520-200h280v80H160Zm360-120q-17 0-28.5-11.5T480-280v-160q0-17 11.5-28.5T520-480h160q17 0 28.5 11.5T720-440v40l80-42v164l-80-42v40q0 17-11.5 28.5T680-240H520Z" />
  </svg>
)
