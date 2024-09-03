import React from 'react'
import { IconProps } from './types'

const IconMoveItemSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M806-440H320v-80h486l-62-62 56-58 160 160-160 160-56-58 62-62ZM600-600v-160H200v560h400v-160h80v240H120v-720h560v240h-80Z" />
  </svg>
)

export { IconMoveItemSharp as default }
