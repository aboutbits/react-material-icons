import React from 'react'
import { IconProps } from './types'

const IconFilter9Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-360h200v-400H440v240h160v80H480v80Zm120-240h-80v-80h80v80ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-240v-480 480Z" />
  </svg>
)

export { IconFilter9Sharp as default }
