import React from 'react'
import { IconProps } from './types.js'

export const IconFolderCheck2SharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440ZM440-240q0 21 3 41t9 39H80v-640h320l80 80h400v251q-35-25-76-38t-84-13q-116 0-198 82t-82 198Zm251 90 139-138-42-42-97 95-39-39-42 43 81 81Z" />
  </svg>
)
