import React from 'react'
import { IconProps } from './types'

const IconBrokenImageOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-264l120 120 160-160 160 160 160-160 120 120v184q0 33-23.5 56.5T760-120H200Zm0-720h560q33 0 56.5 23.5T840-760v263L720-617 560-457 400-617 240-457 120-577v-183q0-33 23.5-56.5T200-840Z" />
  </svg>
)

export { IconBrokenImageOutlinedFilled as default }
