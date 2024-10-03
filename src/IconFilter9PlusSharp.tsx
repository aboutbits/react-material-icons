import React from 'react'
import { IconProps } from './types.js'

export const IconFilter9PlusSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-400h160v-320H360v200h120v40h-80v80Zm80-200h-40v-40h40v40ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-240v-480 480Zm340-120h80v-80h60v-80h-60v-80h-80v80h-80v80h80v80Z" />
  </svg>
)
