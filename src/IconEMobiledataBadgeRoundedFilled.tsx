import React from 'react'
import { IconProps } from './types.js'

export const IconEMobiledataBadgeRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm400-160q17 0 28.5-11.5T640-320q0-17-11.5-28.5T600-360H400v-80h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400v-80h200q17 0 28.5-11.5T640-640q0-17-11.5-28.5T600-680H360q-17 0-28.5 11.5T320-640v320q0 17 11.5 28.5T360-280h240Z" />
  </svg>
)
