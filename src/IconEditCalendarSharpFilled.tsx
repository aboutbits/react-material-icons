import React from 'react'
import { IconProps } from './types'

const IconEditCalendarSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-720h120v-80h80v80h320v-80h80v80h120v280h-80v-40H200v400h280v80H120Zm440 0v-123l263-262 123 122L683-80H560Zm263-224 37-39-37-37-38 38 38 38Z" />
  </svg>
)

export { IconEditCalendarSharpFilled as default }
