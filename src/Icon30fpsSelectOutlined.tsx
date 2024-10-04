import React from 'react'
import { IconProps } from './types.js'

export const Icon30fpsSelectOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-400v-80h200v-80H160v-80h200v-80H160v-80h200q33 0 56.5 23.5T440-720v60q0 26-17 43t-43 17q26 0 43 17t17 43v60q0 33-23.5 56.5T360-400H160Zm560 0H600q-33 0-56.5-23.5T520-480v-240q0-33 23.5-56.5T600-800h120q33 0 56.5 23.5T800-720v240q0 33-23.5 56.5T720-400Zm0-80v-240H600v240h120ZM120-80v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h240v200H600Z" />
  </svg>
)
