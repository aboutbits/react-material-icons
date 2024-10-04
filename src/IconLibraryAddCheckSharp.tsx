import React from 'react'
import { IconProps } from './types'

const IconLibraryAddCheckSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m508-398 226-226-56-58-170 170-86-84-56 56 142 142ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-720v480-480Z" />
  </svg>
)

export { IconLibraryAddCheckSharp as default }
