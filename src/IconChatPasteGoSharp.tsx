import React from 'react'
import { IconProps } from './types.js'

export const IconChatPasteGoSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m720-120-56-56 63-64H560v-80h167l-63-64 56-56 160 160-160 160Zm-600 0v-680h640v283q-10-2-20-2.5t-20-.5q-10 0-20 .5t-20 2.5v-203H200v400h283q-2 10-2.5 20t-.5 20q0 10 .5 20t2.5 20H240L120-120Zm160-440h320v-80H280v80Zm0 160h200v-80H280v80Zm-80 80v-400 400Z" />
  </svg>
)
