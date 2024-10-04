import React from 'react'
import { IconProps } from './types.js'

export const IconFlagCheckOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M500-560ZM200-120v-680h250q-5 20-8 40t-2 40H280v240h290l16 80h134v-46q20 0 40-3t40-9v138H520l-16-80H280v280h-80Zm491-516 139-138-42-42-97 95-39-39-42 43 81 81Zm29-290q83 0 141.5 58.5T920-726q0 83-58.5 141.5T720-526q-83 0-141.5-58.5T520-726q0-83 58.5-141.5T720-926Z" />
  </svg>
)