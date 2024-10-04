import React from 'react'
import { IconProps } from './types.js'

export const Icon4gMobiledataOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280v-120H120v-280h80v200h80v-200h80v200h80v80h-80v120h-80Zm560-240v160q0 33-23.5 56.5T760-280H560q-33 0-56.5-23.5T480-360v-240q0-33 23.5-56.5T560-680h200q33 0 56.5 23.5T840-600H560v240h200v-80H660v-80h180Z" />
  </svg>
)
