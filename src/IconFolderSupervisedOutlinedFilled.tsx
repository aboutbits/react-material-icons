import React from 'react'
import { IconProps } from './types.js'

export const IconFolderSupervisedOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v131q-35-25-76-38t-85-13q-118 0-198.5 82.5T440-281q0 32 7 62t21 59H160Zm400 0v-22q0-45 44-71.5T720-280q72 0 116 26.5t44 71.5v22H560Zm160-160q-33 0-56.5-23.5T640-400q0-33 23.5-56.5T720-480q33 0 56.5 23.5T800-400q0 33-23.5 56.5T720-320Z" />
  </svg>
)
