import React from 'react'
import { IconProps } from './types'

const IconBorderLeftOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h80v720h-80Zm160 0v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z" />
  </svg>
)

export { IconBorderLeftOutlinedFilled as default }
