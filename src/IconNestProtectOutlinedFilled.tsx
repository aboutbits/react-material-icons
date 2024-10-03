import React from 'react'
import { IconProps } from './types.js'

export const IconNestProtectOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120q-84 0-142-58t-58-142v-320q0-84 58-142t142-58h320q84 0 142 58t58 142v320q0 84-58 142t-142 58H320Zm0-80h320q51 0 85.5-34.5T760-320v-320q0-51-34.5-85.5T640-760H320q-51 0-85.5 34.5T200-640v320q0 51 34.5 85.5T320-200Zm160-80q-84 0-142-58t-58-142q0-84 58-142t142-58q84 0 142 58t58 142q0 84-58 142t-142 58Zm0-80q51 0 85.5-34.5T600-480q0-51-34.5-85.5T480-600q-51 0-85.5 34.5T360-480q0 51 34.5 85.5T480-360Z" />
  </svg>
)
