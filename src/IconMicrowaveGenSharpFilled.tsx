import React from 'react'
import { IconProps } from './types'

const IconMicrowaveGenSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm120-120h400v-400H200v400Zm80-80v-240h240v240H280Zm400-240h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Z" />
  </svg>
)

export { IconMicrowaveGenSharpFilled as default }
