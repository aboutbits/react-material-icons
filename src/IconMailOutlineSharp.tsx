import React from 'react'
import { IconProps } from './types'

const IconMailOutlineSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 4H2.01L2 20h20V4zm-2 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
  </svg>
)

export { IconMailOutlineSharp as default }
