import React from 'react'
import { IconProps } from './types'

const IconPregnantWomanOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-80v-200h-80v-280q0-50 35-85t85-35q50 0 85 35t35 85q36 15 58 48t22 72v160H520v200H400Zm40-640q-33 0-56.5-23.5T360-800q0-33 23.5-56.5T440-880q33 0 56.5 23.5T520-800q0 33-23.5 56.5T440-720Z" />
  </svg>
)

export { IconPregnantWomanOutlinedFilled as default }
