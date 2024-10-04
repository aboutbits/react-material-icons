import React from 'react'
import { IconProps } from './types.js'

export const IconDesktopWindowsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120v-80h80v-80H80v-560h800v560H560v80h80v80H320Z" />
  </svg>
)