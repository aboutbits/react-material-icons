import React from 'react'
import { IconProps } from './types.js'

export const IconAcuteOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-160q-134 0-227-93t-93-227q0-133 93-226.5T600-800q133 0 226.5 93.5T920-480q0 134-93.5 227T600-160Zm91-171 57-57-108-108v-144h-80v177l131 132ZM80-600v-80h160v80H80ZM40-440v-80h200v80H40Zm40 160v-80h160v80H80Z" />
  </svg>
)
