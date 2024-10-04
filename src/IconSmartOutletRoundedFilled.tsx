import React from 'react'
import { IconProps } from './types.js'

export const IconSmartOutletRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-440q17 0 28.5-11.5T360-480v-80q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560v80q0 17 11.5 28.5T320-440Zm160 80q-18 0-29 11t-11 29v20q0 8 6 14t14 6h40q8 0 14-6t6-14v-20q0-18-11-29t-29-11Zm160-80q17 0 28.5-11.5T680-480v-80q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560v80q0 17 11.5 28.5T640-440ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)