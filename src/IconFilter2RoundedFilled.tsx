import React from 'react'
import { IconProps } from './types'

export const IconFilter2RoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-440v-80h80q33 0 56.5-23.5T680-600v-80q0-33-23.5-56.5T600-760H480q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680h120v80h-80q-33 0-56.5 23.5T440-520v120q0 17 11.5 28.5T480-360h160q17 0 28.5-11.5T680-400q0-17-11.5-28.5T640-440H520ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Z" />
  </svg>
)
