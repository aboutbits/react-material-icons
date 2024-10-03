import React from 'react'
import { IconProps } from './types.js'

export const IconAllMatchSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-160 240-320L80-800h560l240 320-5 7q-35-23-74-35t-81-12q-116 0-198 82t-82 198q0 21 3 41t9 39H80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-29-110 139-138-42-42-97 95-39-39-42 43 81 81Z" />
  </svg>
)
