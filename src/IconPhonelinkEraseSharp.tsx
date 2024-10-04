import React from 'react'
import { IconProps } from './types'

const IconPhonelinkEraseSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-40v-880h560v240h-80v-40H240v480h400v-40h80v240H160Zm80-120v40h400v-40H240Zm0-640h400v-40H240v40Zm0 0v-40 40Zm0 640v40-40Zm336-160-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104Z" />
  </svg>
)

export { IconPhonelinkEraseSharp as default }
