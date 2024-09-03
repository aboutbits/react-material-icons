import React from 'react'
import { IconProps } from './types'

const IconDeskphoneSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-200h80v-560h-80v560ZM240-400h80v-80h-80v80Zm0 120h80v-80h-80v80Zm0-240h320v-160H240v160Zm120 120h80v-80h-80v80Zm0 120h80v-80h-80v80Zm120-120h80v-80h-80v80Zm0 120h80v-80h-80v80Zm120 40v-480H200v480h400Zm-480 80v-640h480v-40h240v720H600v-40H120Zm80-80v-480 480Z" />
  </svg>
)

export { IconDeskphoneSharp as default }