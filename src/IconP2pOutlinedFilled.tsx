import React from 'react'
import { IconProps } from './types'

const IconP2pOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-560q0-33 23.5-56.5T160-880h200q33 0 56.5 23.5T440-800v200h-80v-80H160v320h280v120q0 33-23.5 56.5T360-160H160Zm440 80q-33 0-56.5-23.5T520-160v-200h80v80h200v-320H520v-120q0-33 23.5-56.5T600-800h200q33 0 56.5 23.5T880-720v560q0 33-23.5 56.5T800-80H600ZM320-440q-17 0-28.5-11.5T280-480q0-17 11.5-28.5T320-520q17 0 28.5 11.5T360-480q0 17-11.5 28.5T320-440Zm160 0q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm160 0q-17 0-28.5-11.5T600-480q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480q0 17-11.5 28.5T640-440Z" />
  </svg>
)

export { IconP2pOutlinedFilled as default }
