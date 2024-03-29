import React from 'react'
import { IconProps } from './types'

const IconTabletSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M23 4H1v16h21.99L23 4zm-4 14H5V6h14v12z" />
  </svg>
)

export { IconTabletSharp as default }
