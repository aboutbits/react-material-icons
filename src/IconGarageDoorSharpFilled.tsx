import React from 'react'
import { IconProps } from './types.js'

export const IconGarageDoorSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-400v-80h320v80H320Zm0 120v-80h320v80H320Zm0 120v-80h320v80H320Zm160-680 400 360H760v320h-80v-360H280v360h-80v-320H80l400-360Z" />
  </svg>
)
