import React from 'react'
import { IconProps } from './types.js'

export const IconCurtainsClosedSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-80h80v-640h640v640h80v80H80Zm160-80h120v-560H240v560Zm200 0h80v-560h-80v560Zm160 0h120v-560H600v560Zm-360 0v-560 560Zm480 0v-560 560Z" />
  </svg>
)
