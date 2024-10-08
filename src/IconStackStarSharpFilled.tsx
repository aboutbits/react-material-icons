import React from 'react'
import { IconProps } from './types'

const IconStackStarSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m509-220 91-55 91 55-24-104 80-69-105-9-42-98-42 98-105 9 80 69-24 104ZM240-400v80H80v-560h560v160h-80v-80H160v400h80Zm80 320v-560h560v560H320Z" />
  </svg>
)

export { IconStackStarSharpFilled as default }
