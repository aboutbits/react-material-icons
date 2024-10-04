import React from 'react'
import { IconProps } from './types.js'

export const IconPageviewOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M630-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160h-56L556-348q-21 14-45.5 21t-50.5 7q-75 0-127.5-52.5T280-500q0-75 52.5-127.5T460-680q75 0 127.5 52.5T640-500q0 27-7 51t-21 45l164 164h24v-480H160v480h390l80 80ZM460-400q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM160-240v-480 480Z" />
  </svg>
)
