import React from 'react'
import { IconProps } from './types'

export const IconWysiwygSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm80-80h560v-480H200v480Zm80-280v-80h400v80H280Zm0 160v-80h240v80H280Z" />
  </svg>
)
