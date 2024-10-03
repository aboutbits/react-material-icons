import React from 'react'
import { IconProps } from './types.js'

export const IconIronOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-240v-120q0-66 47-113t113-47h360v-40q0-17-11.5-28.5T560-600H400q-17 0-28.5 11.5T360-560h-80q0-50 35-85t85-35h160q50 0 85 35t35 85v160q17 0 28.5-11.5T720-440v-160q0-50 35-85t85-35h40v80h-40q-17 0-28.5 11.5T800-600v160q0 50-35 85t-85 35v80H80Zm80-80h440v-120H240q-33 0-56.5 23.5T160-360v40Zm440 0v-120 120Z" />
  </svg>
)
