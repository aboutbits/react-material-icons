import React from 'react'
import { IconProps } from './types.js'

export const IconTabDuplicateOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM240-80v-80h80v80h-80Zm-80-640H80q0-33 23.5-56.5T160-800v80ZM400-80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm-400-80v80q-33 0-56.5-23.5T80-160h80Zm-80-80v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm640 400h80q0 33-23.5 56.5T720-80v-80ZM520-640h280v-160H520v160Z" />
  </svg>
)