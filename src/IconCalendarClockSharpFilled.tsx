import React from 'react'
import { IconProps } from './types.js'

export const IconCalendarClockSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-720h120v-80h80v80h320v-80h80v80h120v307q-19-9-39-15t-41-9v-43H200v400h252q7 22 16.5 42T491-80H120Zm600 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm67-105 28-28-75-75v-112h-40v128l87 87Z" />
  </svg>
)
