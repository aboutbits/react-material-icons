import React from 'react'
import { IconProps } from './types'

export const IconTvSigninSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-360h320v-22q0-45-44-71.5T480-480q-72 0-116 26.5T320-382v22Zm160-160q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM320-120v-80H80v-640h800v640H640v80H320Z" />
  </svg>
)
