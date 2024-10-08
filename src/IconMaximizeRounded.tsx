import React from 'react'
import { IconProps } from './types'

const IconMaximizeRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-760q-17 0-28.5-11.5T160-800q0-17 11.5-28.5T200-840h560q17 0 28.5 11.5T800-800q0 17-11.5 28.5T760-760H200Z" />
  </svg>
)

export { IconMaximizeRounded as default }
