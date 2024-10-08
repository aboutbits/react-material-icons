import React from 'react'
import { IconProps } from './types'

const IconGeneralDeviceSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-240v-600h320v600H320Zm0 120v-80h320v80H320Z" />
  </svg>
)

export { IconGeneralDeviceSharpFilled as default }
