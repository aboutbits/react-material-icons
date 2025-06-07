import React from 'react'
import { IconProps } from './types.js'

export const IconPermCameraMicRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l50-54q11-12 26.5-19t32.5-7h170q17 0 32.5 7t26.5 19l50 54h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H520v-124q78-12 132.5-68T718-445q2-14-9.5-24.5T680-480q-15 0-27.5 8.5T637-449q-11 55-55 92t-102 37q-58 0-101.5-36.5T324-447q-3-15-15.5-24t-28.5-9q-17 0-28.5 10.5T242-445q11 77 65.5 133T440-244v124H160Zm320-280q33 0 56.5-23.5T560-480v-160q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640v160q0 33 23.5 56.5T480-400Z" />
  </svg>
)
