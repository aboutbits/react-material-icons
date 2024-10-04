import React from 'react'
import { IconProps } from './types.js'

export const IconEventNoteRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm120-240q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480h320q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400H320Zm0 160q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320h200q17 0 28.5 11.5T560-280q0 17-11.5 28.5T520-240H320Z" />
  </svg>
)