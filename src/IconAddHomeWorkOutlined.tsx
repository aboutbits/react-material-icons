import React from 'react'
import { IconProps } from './types'

export const IconAddHomeWorkOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200v-200h240v200-200H200v200Zm480-360ZM40-120v-400l280-200 280 200-28.5 28.5L543-463 320-622 120-480v280h80v-200h240v280h-80v-200h-80v200H40Zm880-720v405q-17-18-37-32.5T840-493v-267H480v56l-80-58v-78h520ZM680-600h80v-80h-80v80Zm40 560q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-20-80h40v-100h100v-40H740v-100h-40v100H600v40h100v100Z" />
  </svg>
)
