import React from 'react'
import { IconProps } from './types'

const IconPackageRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m400-570 53-26q13-6 27-6t27 6l53 26v-190H400v190Zm-80 290q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360h120q17 0 28.5 11.5T480-320q0 17-11.5 28.5T440-280H320ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-640v560-560Zm0 560h560v-560H640v255q0 23-19 34.5t-39 1.5l-102-51-102 51q-20 10-39-1.5T320-505v-255H200v560Z" />
  </svg>
)

export { IconPackageRounded as default }
