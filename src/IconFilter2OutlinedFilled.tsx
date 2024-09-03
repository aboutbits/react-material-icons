import React from 'react'
import { IconProps } from './types'

const IconFilter2OutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-360h240v-80H520v-80h80q33 0 56.5-23.5T680-600v-80q0-33-23.5-56.5T600-760H440v80h160v80h-80q-33 0-56.5 23.5T440-520v160ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Z" />
  </svg>
)

export { IconFilter2OutlinedFilled as default }
