import React from 'react'
import { IconProps } from './types'

const IconSpeed05xSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-280v-80h80v80h-80Zm400 0 120-200-120-200h80l80 133 80-133h80L720-480l120 200h-80l-80-133-80 133h-80Zm-280 0v-80h160v-80H240v-240h240v80H320v80h160v240H240Z" />
  </svg>
)

export { IconSpeed05xSharp as default }