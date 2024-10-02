import React from 'react'
import { IconProps } from './types'

export const IconExplicitRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-360v-80h120q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H440v-80h120q17 0 28.5-11.5T600-640q0-17-11.5-28.5T560-680H400q-17 0-28.5 11.5T360-640v320q0 17 11.5 28.5T400-280h160q17 0 28.5-11.5T600-320q0-17-11.5-28.5T560-360H440ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
  </svg>
)
