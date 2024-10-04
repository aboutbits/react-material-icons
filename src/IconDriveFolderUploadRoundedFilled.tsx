import React from 'react'
import { IconProps } from './types.js'

export const IconDriveFolderUploadRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm320-120q17 0 28.5-11.5T520-320v-128l36 36q11 11 28 11t28-11q11-11 11-28t-11-28L508-572q-12-12-28-12t-28 12L348-468q-11 11-11 28t11 28q11 11 28 11t28-11l36-36v128q0 17 11.5 28.5T480-280Z" />
  </svg>
)