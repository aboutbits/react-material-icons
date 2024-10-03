import React from 'react'
import { IconProps } from './types.js'

export const Icon60fpsSelectOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-400H240q-33 0-56.5-23.5T160-480v-240q0-33 23.5-56.5T240-800h200v80H240v80h120q33 0 56.5 23.5T440-560v80q0 33-23.5 56.5T360-400ZM240-560v80h120v-80H240Zm480 160H600q-33 0-56.5-23.5T520-480v-240q0-33 23.5-56.5T600-800h120q33 0 56.5 23.5T800-720v240q0 33-23.5 56.5T720-400Zm0-80v-240H600v240h120ZM120-80v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h240v200H600Z" />
  </svg>
)
