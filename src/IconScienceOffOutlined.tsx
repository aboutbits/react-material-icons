import React from 'react'
import { IconProps } from './types'

export const IconScienceOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m600-473-80-80v-207h-80v127l-80-80v-47h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v287ZM200-200h448L402-446 200-200ZM792-56l-64-64H200q-51 0-72.5-45.5T138-250l208-252L56-792l56-56 736 736-56 56ZM402-446Zm78-147Z" />
  </svg>
)
