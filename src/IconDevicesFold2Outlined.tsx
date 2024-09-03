import React from 'react'
import { IconProps } from './types'

const IconDevicesFold2Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-120H280q-33 0-56.5-23.5T200-200v-560q0-33 23.5-56.5T280-840h424q25 0 45 13.5t29 36.5l96 240q16 40-7.5 75T800-440h-40v240q0 33-23.5 56.5T680-120Zm120-400-96-240H280l96 240h424ZM680-200v-240H376q-25 0-45-13.5T302-490l-22-55v345h400ZM540-640Z" />
  </svg>
)

export { IconDevicesFold2Outlined as default }