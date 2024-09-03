import React from 'react'
import { IconProps } from './types'

const IconFilter6Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-360h80q33 0 56.5-23.5T680-440v-80q0-33-23.5-56.5T600-600h-80v-80h120v-80H520q-33 0-56.5 23.5T440-680v240q0 33 23.5 56.5T520-360Zm0-160h80v80h-80v-80ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
  </svg>
)

export { IconFilter6Outlined as default }
