import React from 'react'
import { IconProps } from './types'

const IconKeyboardControlKeyRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-647 284-452q-11 11-27.5 11.5T228-452q-11-11-11-28t11-28l224-224q12-12 28-12t28 12l224 224q11 11 11.5 27.5T732-452q-11 11-28 11t-28-11L480-647Z" />
  </svg>
)

export { IconKeyboardControlKeyRounded as default }
