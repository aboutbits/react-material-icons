import React from 'react'
import { IconProps } from './types'

const IconDoorFrontSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120h720v-80h-80v-640H200v640h-80v80Zm440-320q-17 0-28.5-11.5T520-480q0-17 11.5-28.5T560-520q17 0 28.5 11.5T600-480q0 17-11.5 28.5T560-440Z" />
  </svg>
)

export { IconDoorFrontSharpFilled as default }
