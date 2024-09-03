import React from 'react'
import { IconProps } from './types'

const IconFilter1Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-680v280q0 17 11.5 28.5T600-360q17 0 28.5-11.5T640-400v-320q0-17-11.5-28.5T600-760h-80q-17 0-28.5 11.5T480-720q0 17 11.5 28.5T520-680h40ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm160-720v480-480Z" />
  </svg>
)

export { IconFilter1Rounded as default }
