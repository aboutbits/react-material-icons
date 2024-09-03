import React from 'react'
import { IconProps } from './types'

const IconErrorMedOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m443-362 74-101 73 101 130-177-64-47-66 89-74-101-73 101-74-101-129 177 64 47 65-89 74 101Zm37 282q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)

export { IconErrorMedOutlinedFilled as default }
