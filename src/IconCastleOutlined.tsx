import React from 'react'
import { IconProps } from './types'

export const IconCastleOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-480h80v80h80v-320h80v80h80v-80h80v80h80v-80h80v80h80v-80h80v320h80v-80h80v480H560v-120q0-33-23.5-56.5T480-320q-33 0-56.5 23.5T400-240v120H40Zm80-80h200v-40q0-66 47-113t113-47q66 0 113 47t47 113v40h200v-240H680v-240H280v240H120v240Zm240-280h80v-120h-80v120Zm160 0h80v-120h-80v120Zm-40 40Z" />
  </svg>
)
