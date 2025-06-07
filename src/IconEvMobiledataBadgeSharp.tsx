import React from 'react'
import { IconProps } from './types.js'

export const IconEvMobiledataBadgeSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-280h240v-80H280v-80h120v-80H280v-80h160v-80H200v400Zm380 0h80l100-400h-80l-60 240-60-240h-80l100 400ZM40-120v-720h880v720H40Zm80-80h720v-560H120v560Zm0 0v-560 560Z" />
  </svg>
)
