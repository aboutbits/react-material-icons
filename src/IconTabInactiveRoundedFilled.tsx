import React from 'react'
import { IconProps } from './types'

const IconTabInactiveRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-80q-33 0-56.5-23.5T240-160v-80h-80q-33 0-56.5-23.5T80-320v-40q0-17 11.5-28.5T120-400q17 0 28.5 11.5T160-360v40h80v-320q0-33 23.5-56.5T320-720h320v-80h-40q-17 0-28.5-11.5T560-840q0-17 11.5-28.5T600-880h40q33 0 56.5 23.5T720-800v80h80q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H320ZM120-480q-17 0-28.5-11.5T80-520v-80q0-17 11.5-28.5T120-640q17 0 28.5 11.5T160-600v80q0 17-11.5 28.5T120-480Zm0-240q-17 0-28.5-11.5T80-760v-40q0-33 23.5-56.5T160-880h40q17 0 28.5 11.5T240-840q0 17-11.5 28.5T200-800h-40v40q0 17-11.5 28.5T120-720Zm240-80q-17 0-28.5-11.5T320-840q0-17 11.5-28.5T360-880h80q17 0 28.5 11.5T480-840q0 17-11.5 28.5T440-800h-80Z" />
  </svg>
)

export { IconTabInactiveRoundedFilled as default }
