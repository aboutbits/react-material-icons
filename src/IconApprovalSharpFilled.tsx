import React from 'react'
import { IconProps } from './types.js'

export const IconApprovalSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-320h640v320H160Zm80-160h480v-80H240v80Zm240-160L280-680q0-83 58.5-141.5T480-880q83 0 141.5 58.5T680-680L480-400Z" />
  </svg>
)
