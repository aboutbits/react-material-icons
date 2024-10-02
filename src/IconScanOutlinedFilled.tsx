import React from 'react'
import { IconProps } from './types'

export const IconScanOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-600h200L520-800v200ZM240-80q-33 0-56.5-23.5T160-160v-120h640v120q0 33-23.5 56.5T720-80H240ZM40-360v-80h880v80H40Zm120-160v-280q0-33 23.5-56.5T240-880h320l240 240v120H160Z" />
  </svg>
)
