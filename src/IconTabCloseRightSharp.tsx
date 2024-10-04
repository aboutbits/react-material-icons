import React from 'react'
import { IconProps } from './types'

const IconTabCloseRightSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m366-310 114-114 114 114 56-56-114-114 114-114-56-56-114 114-114-114-56 56 114 114-114 114 56 56ZM200-200v-560 560Zm-80 80v-720h720v414q-19-7-39-10.5t-41-3.5v-320H200v560h320q0 21 3.5 41t10.5 39H120Zm640 80-56-56 63-64H600v-80h167l-63-64 56-56 160 160L760-40Z" />
  </svg>
)

export { IconTabCloseRightSharp as default }
