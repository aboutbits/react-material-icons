import React from 'react'
import { IconProps } from './types'

const IconAlignHorizontalLeftSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-800h80v800H80Zm160-200v-120h400v120H240Zm0-280v-120h640v120H240Z" />
  </svg>
)

export { IconAlignHorizontalLeftSharp as default }
