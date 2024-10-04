import React from 'react'
import { IconProps } from './types.js'

export const IconTimer10Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-320h120v-320H560v320Zm0 120q-50 0-85-35t-35-85v-320q0-50 35-85t85-35h120q50 0 85 35t35 85v320q0 50-35 85t-85 35H560Zm-320 0v-440h-80v-120h200v560H240Z" />
  </svg>
)
