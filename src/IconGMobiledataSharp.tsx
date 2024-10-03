import React from 'react'
import { IconProps } from './types.js'

export const IconGMobiledataSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280v-400h360v80H360v240h200v-80h-80v-80h160v240H280Z" />
  </svg>
)
