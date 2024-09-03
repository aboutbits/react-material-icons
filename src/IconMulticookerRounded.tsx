import React from 'react'
import { IconProps } from './types'

const IconMulticookerRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-760v-40q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v40h120q33 0 56.5 23.5T840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-480q0-33 23.5-56.5T200-760h120ZM200-200h560v-360h-80v80q0 33-23.5 56.5T600-400H360q-33 0-56.5-23.5T280-480v-80h-80v360Zm120-40q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm160 0q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm160 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240ZM360-480h240v-80H360v80ZM200-640h560v-40H200v40Zm200-120h160v-40H400v40Z" />
  </svg>
)

export { IconMulticookerRounded as default }