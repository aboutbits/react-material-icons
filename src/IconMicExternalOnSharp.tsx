import React from 'react'
import { IconProps } from './types.js'

export const IconMicExternalOnSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M192-680q-15-17-23.5-37t-8.5-43q0-50 35-85t85-35q50 0 85 35t35 85q0 23-8.5 43T368-680H192Zm48 600v-160h-40l-40-400h240l-40 400h-40v80h160v-720h320v800h-80v-720H560v720H240Zm32-240h16l24-240h-64l24 240Zm16-240h-40 64-24Z" />
  </svg>
)
