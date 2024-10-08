import React from 'react'
import { IconProps } from './types'

const IconGeneralDeviceOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-240v-520q0-33 23.5-56.5T400-840h160q33 0 56.5 23.5T640-760v520H320Zm0 120v-80h320v80H320Z" />
  </svg>
)

export { IconGeneralDeviceOutlinedFilled as default }
