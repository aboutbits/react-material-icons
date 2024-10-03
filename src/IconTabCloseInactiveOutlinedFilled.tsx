import React from 'react'
import { IconProps } from './types.js'

export const IconTabCloseInactiveOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-80v-80h160v80H560Zm-240 0v-80h160v80H320ZM160-560H80v-160h80v160Zm0 240H80v-160h80v160Zm80 240h-80q-33 0-56.5-23.5T80-160v-80h80v80h80v80Zm236-340 84-84 84 84 56-56-84-84 84-84-56-56-84 84-84-84-56 56 84 84-84 84 56 56ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Z" />
  </svg>
)
