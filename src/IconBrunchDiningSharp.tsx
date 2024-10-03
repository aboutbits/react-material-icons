import React from 'react'
import { IconProps } from './types.js'

export const IconBrunchDiningSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-80h560v80H80Zm0-160v-80h200v-80h160v80h200v80H80ZM720-80v-244q-36-41-58-81t-22-97v-378h240v378q0 57-21.5 97.5T800-324v164h80v80H720Zm0-560h80v-160h-80v160Zm40 242q18-21 29-48t11-56v-58h-80v58q0 29 10 56t30 48Zm0 0Z" />
  </svg>
)
