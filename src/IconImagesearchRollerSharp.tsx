import React from 'react'
import { IconProps } from './types.js'

export const IconImagesearchRollerSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-40H400v-320h80v-120H80v-320h160v-80h560v240H240v-80h-80v160h400v200h80v320Zm-160-80h80v-160h-80v160ZM320-720h400v-80H320v80Zm160 600h80-80ZM320-720v-80 80Z" />
  </svg>
)
