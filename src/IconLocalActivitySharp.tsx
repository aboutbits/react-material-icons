import React from 'react'
import { IconProps } from './types'

const IconLocalActivitySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM80-160v-240q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-240h800v240q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v240H80Zm80-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z" />
  </svg>
)

export { IconLocalActivitySharp as default }
