import React from 'react'
import { IconProps } from './types'

const IconLocalPostOfficeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 4H2.01v16H22V4zm-2 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

export { IconLocalPostOfficeSharp as default }
