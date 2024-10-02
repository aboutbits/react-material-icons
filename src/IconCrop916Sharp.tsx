import React from 'react'
import { IconProps } from './types'

export const IconCrop916Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120v-720h400v720H280Zm80-640v560h240v-560H360Zm0 560v-560 560Z" />
  </svg>
)
