import React from 'react'
import { IconProps } from './types'

const IconAlignSpaceAroundSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-800v-80h800v80H80Zm0 720v-80h800v80H80Zm200-520v-120h400v120H280Zm0 360v-120h400v120H280Z" />
  </svg>
)

export { IconAlignSpaceAroundSharp as default }
