import React from 'react'
import { IconProps } from './types'

export const IconSingleBedOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-200h-40l-26-80h-54v-201q0-33 23.5-56t56.5-23v-120q0-33 23.5-56.5T320-760h320q33 0 56.5 23.5T720-680v120q33 0 56.5 23.5T800-480v200h-54l-26 80h-40l-26-80H306l-26 80Zm240-360h120v-120H520v120Zm-200 0h120v-120H320v120Z" />
  </svg>
)
