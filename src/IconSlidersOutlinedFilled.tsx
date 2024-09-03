import React from 'react'
import { IconProps } from './types'

const IconSlidersOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-360q-50 0-85-35t-35-85q0-50 35-85t85-35h560q50 0 85 35t35 85q0 50-35 85t-85 35H200Zm360-80h200q17 0 28.5-11.5T800-480q0-17-11.5-28.5T760-520H560v80Z" />
  </svg>
)

export { IconSlidersOutlinedFilled as default }
