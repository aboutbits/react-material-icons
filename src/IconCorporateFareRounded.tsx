import React from 'react'
import { IconProps } from './types'

export const IconCorporateFareRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h240q33 0 56.5 23.5T480-760v80h320q33 0 56.5 23.5T880-600v400q0 33-23.5 56.5T800-120H160Zm0-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm120-240q-17 0-28.5-11.5T560-480q0-17 11.5-28.5T600-520h80q17 0 28.5 11.5T720-480q0 17-11.5 28.5T680-440h-80Zm0 160q-17 0-28.5-11.5T560-320q0-17 11.5-28.5T600-360h80q17 0 28.5 11.5T720-320q0 17-11.5 28.5T680-280h-80Z" />
  </svg>
)
