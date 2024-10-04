import React from 'react'
import { IconProps } from './types'

const IconAdGroupOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-28 608-240H240v-368L28-820l56-56L876-84l-56 56ZM80-80v-640h80v560h560v80H80Zm748-165L353-720h447v-80H320v47l-75-75v-52h635v635h-52Z" />
  </svg>
)

export { IconAdGroupOffSharpFilled as default }
