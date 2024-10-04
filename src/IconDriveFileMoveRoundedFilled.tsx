import React from 'react'
import { IconProps } from './types.js'

export const IconDriveFileMoveRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm328-240-37 37q-11 11-11 28t11 28q11 11 28 11t28-11l105-105q12-12 12-28t-12-28L507-573q-11-11-28-11t-28 11q-11 11-11 28t11 28l37 37H360q-17 0-28.5 11.5T320-440q0 17 11.5 28.5T360-400h128Z" />
  </svg>
)