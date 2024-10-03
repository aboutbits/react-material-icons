import React from 'react'
import { IconProps } from './types.js'

export const IconIronSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-240v-120q0-66 47-113t113-47h360v-80H360v40h-80v-120h400v280h40v-320h160v80h-80v320H680v80H80Zm80-80h440v-120H240q-33 0-56.5 23.5T160-360v40Zm440 0v-120 120Z" />
  </svg>
)
