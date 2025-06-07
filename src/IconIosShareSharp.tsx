import React from 'react'
import { IconProps } from './types.js'

export const IconIosShareSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-40v-600h200v80H240v440h480v-440H600v-80h200v600H160Zm280-280v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z" />
  </svg>
)
