import React from 'react'
import { IconProps } from './types'

export const IconEdgesensorLowOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-400v-280h80v280H80Zm720 120v-280h80v280h-80ZM320-80q-33 0-56.5-23.5T240-160v-640q0-33 23.5-56.5T320-880h320q33 0 56.5 23.5T720-800v640q0 33-23.5 56.5T640-80H320Zm320-120H320v40h320v-40ZM320-760h320v-40H320v40Zm0 0v-40 40Zm0 560v40-40Zm0-80h320v-400H320v400Z" />
  </svg>
)
