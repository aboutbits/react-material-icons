import React from 'react'
import { IconProps } from './types'

export const IconSpeed175Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280v-80h80v80h-80Zm360 0v-80h160v-80H640v-240h240v80H720v80h80q33 0 56.5 23.5T880-440v80q0 33-23.5 56.5T800-280H640Zm-480 0v-320H80v-80h160v400h-80Zm280 0 80-320H360v-80h170q29 0 49.5 21.5T600-608l-2 18-78 310h-80Z" />
  </svg>
)
