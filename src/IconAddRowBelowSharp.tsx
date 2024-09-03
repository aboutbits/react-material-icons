import React from 'react'
import { IconProps } from './types'

const IconAddRowBelowSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-560h560v-240H200v240Zm-80 400v-720h720v720H680v-80h80v-240H200v240h80v80H120Zm360-320Zm0-80v80-80Zm0 0ZM440-80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)

export { IconAddRowBelowSharp as default }
