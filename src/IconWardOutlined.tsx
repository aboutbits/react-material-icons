import React from 'react'
import { IconProps } from './types'

export const IconWardOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-880h80q17 0 28.5 11.5T240-840v760q-33 0-56.5-23.5T160-160v-640h-40q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880ZM360-80q-33 0-56.5-23.5T280-160v-640q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H360Zm0-459q18-11 38-16t42-5h200q22 0 42 5t38 16v-261H360v261Zm180-61q-33 0-56.5-23.5T460-680q0-33 23.5-56.5T540-760q33 0 56.5 23.5T620-680q0 33-23.5 56.5T540-600ZM360-160h360v-240q0-33-23.5-56.5T640-480H440q-33 0-56.5 23.5T360-400v240Zm140-40h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm-140 40h360-360Z" />
  </svg>
)
