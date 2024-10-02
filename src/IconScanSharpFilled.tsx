import React from 'react'
import { IconProps } from './types'

export const IconScanSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-600h200L520-800v200ZM160-80v-200h640v200H160ZM40-360v-80h880v80H40Zm120-160v-360h400l240 240v120H160Z" />
  </svg>
)
