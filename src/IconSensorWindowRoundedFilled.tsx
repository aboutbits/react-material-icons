import React from 'react'
import { IconProps } from './types.js'

export const IconSensorWindowRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm40-440h120v-40h160v40h120v-240H280v240Zm0 80v240h400v-240H280Zm-40-360v640h480v-640H240Z" />
  </svg>
)