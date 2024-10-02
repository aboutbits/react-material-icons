import React from 'react'
import { IconProps } from './types'

export const IconAddPhotoAlternateSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-480ZM120-120v-720h400v80H200v560h560v-320h80v400H120Zm120-160h480L570-480 450-320l-90-120-120 160Zm440-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)
