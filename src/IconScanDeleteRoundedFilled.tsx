import React from 'react'
import { IconProps } from './types.js'

export const IconScanDeleteRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-600h120L520-800v120q0 33 23.5 56.5T600-600Zm120 417-56 55q-11 11-27.5 11.5T608-128q-11-11-11-28t11-28l56-56-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l56 56 56-56q11-11 27.5-11.5T832-352q11 11 11 28t-11 28l-55 56 55 56q11 11 11.5 27.5T832-128q-11 11-28 11t-28-11l-56-55ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v109q0 12-9.5 19t-21.5 4q-59-13-117 4t-102 61q-32 32-51 75.5T480-241q0 29 7 58t21 55q9 17 1 32.5T484-80H240Z" />
  </svg>
)
