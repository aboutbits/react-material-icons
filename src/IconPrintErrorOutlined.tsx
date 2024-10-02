import React from 'react'
import { IconProps } from './types'

export const IconPrintErrorOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120v-160H80v-240q0-51 35-85.5t85-34.5h560q40 0 70.5 22.5T873-560H200q-17 0-28.5 11.5T160-520v160h80v-80h400v80H320v160h320v80H240Zm0-520v-200h480v200h-80v-120H320v120h-80Zm520 520q-17 0-28.5-11.5T720-160q0-17 11.5-28.5T760-200q17 0 28.5 11.5T800-160q0 17-11.5 28.5T760-120Zm-40-160v-200h80v200h-80ZM160-560h713-713Z" />
  </svg>
)
