import React from 'react'
import { IconProps } from './types'

export const IconAppBlockingOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v160h-80v-40H280v480h400v-40h80v160q0 33-23.5 56.5T680-40H280Zm0-80h400v-40H280v40Zm440-200q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-60q12 0 23.5-3t22.5-9L632-526q-6 11-9 22.5t-3 23.5q0 42 29 71t71 29Zm88-54q6-11 9-22.5t3-23.5q0-42-29-71t-71-29q-12 0-23.5 3t-22.5 9l134 134ZM280-800h400v-40H280v40Zm0 0v-40 40Zm0 680v-40 40Z" />
  </svg>
)
