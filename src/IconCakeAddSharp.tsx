import React from 'react'
import { IconProps } from './types.js'

export const IconCakeAddSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-320h80v-240h240v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h240v240h80v320H80Zm160-320h400v-160H240v160Zm-80 240h560v-160H160v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H160h560Zm40-240v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)
