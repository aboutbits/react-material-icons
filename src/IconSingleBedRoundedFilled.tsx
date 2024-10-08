import React from 'react'
import { IconProps } from './types'

const IconSingleBedRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-481q0-33 23.5-56t56.5-23v-120q0-33 23.5-56.5T320-760h320q33 0 56.5 23.5T720-680v120q33 0 56.5 23.5T800-480v146q0 23-15.5 38.5T746-280l-22 67q-2 6-7 9.5t-11 3.5h-12q-6 0-11-3.5t-7-9.5l-22-67H306l-22 67q-2 6-7 9.5t-11 3.5h-12q-6 0-11-3.5t-7-9.5l-22-67q-23 0-38.5-15.5T160-334v-147Zm360-79h120v-120H520v120Zm-200 0h120v-120H320v120Z" />
  </svg>
)

export { IconSingleBedRoundedFilled as default }
