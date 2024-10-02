import React from 'react'
import { IconProps } from './types'

export const IconLaptopWindowsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0-160v-80h160v-40H80v-560h800v560h-80v40h160v80H0Zm160-200h640v-400H160v400Zm0 0v-400 400Z" />
  </svg>
)
