import React from 'react'
import { IconProps } from './types'

const IconServiceToolboxSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-240h200v40h80v-40h240v40h80v-40h200v240H80Zm17-320 104-240h79v-40q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760v40h79l104 240H680v-40h-80v40H360v-40h-80v40H97Zm263-240h240v-40H360v40Z" />
  </svg>
)

export { IconServiceToolboxSharpFilled as default }
