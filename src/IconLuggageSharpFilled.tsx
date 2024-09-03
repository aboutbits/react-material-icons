import React from 'react'
import { IconProps } from './types'

const IconLuggageSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120h-80v-600h160v-160h240v160h160v600h-80q0 17-11.5 28.5T640-80q-17 0-28.5-11.5T600-120H360q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120Zm80-120h80v-360h-80v360Zm160 0h80v-360h-80v360Zm-80-480h80v-80h-80v80Z" />
  </svg>
)

export { IconLuggageSharpFilled as default }
