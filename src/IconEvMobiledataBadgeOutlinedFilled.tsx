import React from 'react'
import { IconProps } from './types.js'

export const IconEvMobiledataBadgeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm80-160h240v-80H280v-80h120v-80H280v-80h160v-80H200v400Zm380 0h80l100-400h-80l-60 240-60-240h-80l100 400Z" />
  </svg>
)
