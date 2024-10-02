import React from 'react'
import { IconProps } from './types'

export const IconHomeStorageSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m200-120-80-480h720l-80 480H200Zm67-80h426l51-320H216l51 320Zm93-160h240v-80H360v80ZM200-640v-80h560v80H200Zm80-120v-80h400v80H280Zm-13 560h426-426Z" />
  </svg>
)
