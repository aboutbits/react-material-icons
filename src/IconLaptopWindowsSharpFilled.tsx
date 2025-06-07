import React from 'react'
import { IconProps } from './types.js'

export const IconLaptopWindowsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0-160v-80h160v-40H80v-560h800v560h-80v40h160v80H0Z" />
  </svg>
)
