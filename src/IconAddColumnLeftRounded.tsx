import React from 'react'
import { IconProps } from './types'

const IconAddColumnLeftRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-200h240v-560H560v560Zm-320 80q-33 0-56.5-23.5T160-200v-40q0-17 11.5-28.5T200-280q17 0 28.5 11.5T240-240v40h240v-560H240v40q0 17-11.5 28.5T200-680q-17 0-28.5-11.5T160-720v-40q0-33 23.5-56.5T240-840h560q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H240Zm-40-240q-17 0-28.5-11.5T160-400v-40h-40q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h40v-40q0-17 11.5-28.5T200-600q17 0 28.5 11.5T240-560v40h40q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440h-40v40q0 17-11.5 28.5T200-360Zm280-120Zm80 0h-80 80Zm0 0Z" />
  </svg>
)

export { IconAddColumnLeftRounded as default }
