import React from 'react'
import { IconProps } from './types.js'

export const IconFolderCheck2Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240v-480 212-12 280Zm-80 80v-640h320l80 80h400v251q-18-13-38-22.5T800-508v-132H447l-80-80H160v480h280q0 21 3 41t9 39H80Zm611 10 139-138-42-42-97 95-39-39-42 43 81 81Zm29-290q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440Z" />
  </svg>
)
