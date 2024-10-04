import React from 'react'
import { IconProps } from './types.js'

export const IconNightlifeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160v-80h80v-160L40-760h560L360-400v160h80v80H200Zm36-440h168l56-80H180l56 80Zm404 440q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 21 1.5t19 6.5v-368h200v120H760v360q0 50-35 85t-85 35Z" />
  </svg>
)