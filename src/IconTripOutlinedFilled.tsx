import React from 'react'
import { IconProps } from './types'

const IconTripOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-120v-600h80q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120h-80ZM400-720h160v-80H400v80Zm-80 600v-680q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v680H320Zm-160 0q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h80v600h-80Z" />
  </svg>
)

export { IconTripOutlinedFilled as default }
