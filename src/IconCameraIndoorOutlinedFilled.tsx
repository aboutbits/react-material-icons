import React from 'react'
import { IconProps } from './types'

const IconCameraIndoorOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-480l320-240 320 240v480H160Zm200-160h160q17 0 28.5-11.5T560-320v-40l80 42v-164l-80 42v-40q0-17-11.5-28.5T520-520H360q-17 0-28.5 11.5T320-480v160q0 17 11.5 28.5T360-280Z" />
  </svg>
)

export { IconCameraIndoorOutlinedFilled as default }
