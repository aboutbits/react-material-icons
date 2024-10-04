import React from 'react'
import { IconProps } from './types.js'

export const IconStepIntoSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-320L280-600l56-56 104 103v-327h80v327l103-103 57 56-200 200Z" />
  </svg>
)
