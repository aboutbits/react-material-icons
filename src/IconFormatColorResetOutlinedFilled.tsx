import React from 'react'
import { IconProps } from './types'

export const IconFormatColorResetOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M770-304 336-738l144-142 226 222q44 42 69 99.5T800-436q0 36-8 69t-22 63Zm22 248L668-180q-41 29-88 44.5T480-120q-133 0-226.5-92.5T160-436q0-51 16-98t48-90L56-792l56-56 736 736-56 56Z" />
  </svg>
)
