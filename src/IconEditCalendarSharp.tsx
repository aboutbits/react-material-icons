import React from 'react'
import { IconProps } from './types'

const IconEditCalendarSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-720h120v-80h80v80h320v-80h80v80h120v280h-80v-40H200v400h280v80H120Zm80-560h560v-80H200v80Zm0 0v-80 80ZM560-80v-123l263-262 123 122L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
  </svg>
)

export { IconEditCalendarSharp as default }
