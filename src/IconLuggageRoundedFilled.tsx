import React from 'react'
import { IconProps } from './types'

const IconLuggageRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120q-33 0-56.5-23.5T200-200v-440q0-33 23.5-56.5T280-720h80v-80q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v80h80q33 0 56.5 23.5T760-640v440q0 33-23.5 56.5T680-120q0 17-11.5 28.5T640-80q-17 0-28.5-11.5T600-120H360q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120Zm120-480q-17 0-28.5 11.5T360-560v280q0 17 11.5 28.5T400-240q17 0 28.5-11.5T440-280v-280q0-17-11.5-28.5T400-600Zm160 0q-17 0-28.5 11.5T520-560v280q0 17 11.5 28.5T560-240q17 0 28.5-11.5T600-280v-280q0-17-11.5-28.5T560-600ZM440-720h80v-80h-80v80Z" />
  </svg>
)

export { IconLuggageRoundedFilled as default }
