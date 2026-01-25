import React from 'react'
import { IconProps } from './types.js'

export const IconLibraryBooksSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z" />
  </svg>
)
