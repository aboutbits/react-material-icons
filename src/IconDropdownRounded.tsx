import React from 'react'
import { IconProps } from './types'

export const IconDropdownRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-440h200q17 0 28.5-11.5T720-480v-200q0-17-11.5-28.5T680-720H480q-17 0-28.5 11.5T440-680v200q0 17 11.5 28.5T480-440ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
  </svg>
)
