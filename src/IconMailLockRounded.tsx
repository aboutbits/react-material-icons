import React from 'react'
import { IconProps } from './types'

const IconMailLockRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v120q0 17-11.5 28.5T840-560q-17 0-28.5-11.5T800-600v-40L501-453q-5 3-10.5 4.5T480-447q-5 0-10.5-1.5T459-453L160-640v400h440q17 0 28.5 11.5T640-200q0 17-11.5 28.5T600-160H160Zm320-360 320-200H160l320 200ZM160-240v-400 10-59 1-32 32-.5 58.5-10 400Zm600 80q-17 0-28.5-11.5T720-200v-120q0-17 11.5-28.5T760-360v-40q0-33 23.5-56.5T840-480q33 0 56.5 23.5T920-400v40q17 0 28.5 11.5T960-320v120q0 17-11.5 28.5T920-160H760Zm40-200h80v-40q0-17-11.5-28.5T840-440q-17 0-28.5 11.5T800-400v40Z" />
  </svg>
)

export { IconMailLockRounded as default }
