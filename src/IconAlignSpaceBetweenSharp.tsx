import React from 'react'
import { IconProps } from './types'

const IconAlignSpaceBetweenSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-680v-120H80v-80h800v80H680v120H280ZM80-80v-80h200v-120h400v120h200v80H80Z" />
  </svg>
)

export { IconAlignSpaceBetweenSharp as default }
