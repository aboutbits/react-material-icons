import React from 'react'
import { IconProps } from './types.js'

export const IconViewDayOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160v-80h720v80H120Zm0-560v-80h720v80H120Zm80 400q-33 0-56.5-23.5T120-400v-160q0-33 23.5-56.5T200-640h560q33 0 56.5 23.5T840-560v160q0 33-23.5 56.5T760-320H200Z" />
  </svg>
)
