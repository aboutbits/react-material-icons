import React from 'react'
import { IconProps } from './types'

const IconForwardSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 8V4l8 8-8 8v-4H4V8h8z" />
  </svg>
)

export { IconForwardSharp as default }
