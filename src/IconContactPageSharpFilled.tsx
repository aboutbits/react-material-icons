import React from 'react'
import { IconProps } from './types'

const IconContactPageSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-54-17t-57-6q-29 0-57 6t-54 17q-23 10-36 30t-13 44v23ZM800-80H160v-800h400l240 240v560Z" />
  </svg>
)

export { IconContactPageSharpFilled as default }
