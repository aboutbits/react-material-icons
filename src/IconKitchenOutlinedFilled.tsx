import React from 'react'
import { IconProps } from './types.js'

export const IconKitchenOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-640h80v-120h-80v120Zm0 360h80v-200h-80v200ZM240-80q-33 0-56.5-23.5T160-160v-360h640v360q0 33-23.5 56.5T720-80H240Zm-80-520v-200q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v200H160Z" />
  </svg>
)
