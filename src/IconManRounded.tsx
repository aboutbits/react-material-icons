import React from 'react'
import { IconProps } from './types'

const IconManRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-120v-240h-40q-17 0-28.5-11.5T320-400v-200q0-33 23.5-56.5T400-680h160q33 0 56.5 23.5T640-600v200q0 17-11.5 28.5T600-360h-40v240q0 17-11.5 28.5T520-80h-80q-17 0-28.5-11.5T400-120Zm80-600q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z" />
  </svg>
)

export { IconManRounded as default }
