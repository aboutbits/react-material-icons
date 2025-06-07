import React from 'react'
import { IconProps } from './types.js'

export const IconScannerOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M704-480 140-684l28-76 624 228q20 8 34 28t14 44v220q0 33-23.5 56.5T760-160H200q-33 0-56.5-23.5T120-240v-160q0-33 23.5-56.5T200-480h504ZM400-280h320v-80H400v80Zm-120 0q17 0 28.5-11.5T320-320q0-17-11.5-28.5T280-360q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Z" />
  </svg>
)
