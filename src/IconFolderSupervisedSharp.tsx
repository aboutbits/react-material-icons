import React from 'react'
import { IconProps } from './types'

const IconFolderSupervisedSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240v-480 172-12 320Zm-80 80v-640h320l80 80h400v211q-18-13-38-22.5T800-548v-92H447l-80-80H160v480h283q3 21 9.5 41t15.5 39H80Zm480 0v-22q0-45 44-71.5T720-280q72 0 116 26.5t44 71.5v22H560Zm160-160q-33 0-56.5-23.5T640-400q0-33 23.5-56.5T720-480q33 0 56.5 23.5T800-400q0 33-23.5 56.5T720-320Z" />
  </svg>
)

export { IconFolderSupervisedSharp as default }
