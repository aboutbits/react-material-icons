import React from 'react'
import { IconProps } from './types'

const IconEMobiledataRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-280q-17 0-28.5-11.5T320-320v-320q0-17 11.5-28.5T360-680h240q17 0 28.5 11.5T640-640q0 17-11.5 28.5T600-600H400v80h200q17 0 28.5 11.5T640-480q0 17-11.5 28.5T600-440H400v80h200q17 0 28.5 11.5T640-320q0 17-11.5 28.5T600-280H360Z" />
  </svg>
)

export { IconEMobiledataRoundedFilled as default }
