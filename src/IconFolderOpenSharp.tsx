import React from 'react'
import { IconProps } from './types'

export const IconFolderOpenSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h320l80 80h400v80H447l-80-80H160v480l96-320h684L820-160H80Zm164-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z" />
  </svg>
)
