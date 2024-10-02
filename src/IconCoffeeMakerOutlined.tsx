import React from 'react'
import { IconProps } from './types'

export const IconCoffeeMakerOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h560v80h-80v80q0 17-11.5 28.5T680-680H360q-17 0-28.5-11.5T320-720v-80h-80v640h162q-38-27-60-68.5T320-320v-200h400v200q0 50-22 91.5T638-160h162v80H240Zm280-120q50 0 85-35t35-85v-120H400v120q0 50 35 85t85 35Zm0-360q17 0 28.5-11.5T560-600q0-17-11.5-28.5T520-640q-17 0-28.5 11.5T480-600q0 17 11.5 28.5T520-560Zm0 120Z" />
  </svg>
)
