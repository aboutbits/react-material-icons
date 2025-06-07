import React from 'react'
import { IconProps } from './types.js'

export const IconDoorOpenSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-440q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-120v-80l240-40v-481l-240-39v-80l320 52v614l-320 54Zm-160 0v-80h80v-640h560v640h80v80H120Zm160-80h400v-560H280v560Z" />
  </svg>
)
