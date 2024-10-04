import React from 'react'
import { IconProps } from './types.js'

export const IconExposureOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560L200-200Zm380-40v-80h-80v-60h80v-80h60v80h80v60h-80v80h-60ZM240-620h200v-60H240v60Z" />
  </svg>
)
