import React from 'react'
import { IconProps } from './types'

const IconCameraRearSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zm5-20H5v18h14V0zm-7 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6z" />
  </svg>
)

export { IconCameraRearSharp as default }
