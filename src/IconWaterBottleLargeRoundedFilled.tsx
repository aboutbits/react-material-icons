import React from 'react'
import { IconProps } from './types.js'

export const IconWaterBottleLargeRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80q-33 0-56.5-23.5T200-160v-80q0-33 23.5-56.5T280-320v-200q-33 0-56.5-23.5T200-600v-80q0-33 23.5-56.5T280-760h120v-40q-17 0-28.5-11.5T360-840q0-17 11.5-28.5T400-880h160q17 0 28.5 11.5T600-840q0 17-11.5 28.5T560-800v40h120q33 0 56.5 23.5T760-680v80q0 33-23.5 56.5T680-520v200q33 0 56.5 23.5T760-240v80q0 33-23.5 56.5T680-80H280Z" />
  </svg>
)