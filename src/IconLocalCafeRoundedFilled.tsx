import React from 'react'
import { IconProps } from './types'

const IconLocalCafeRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200h560q17 0 28.5 11.5T800-160q0 17-11.5 28.5T760-120H200Zm120-160q-66 0-113-47t-47-113v-320q0-33 23.5-56.5T240-840h560q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Zm400-360h80v-120h-80v120Z" />
  </svg>
)

export { IconLocalCafeRoundedFilled as default }
