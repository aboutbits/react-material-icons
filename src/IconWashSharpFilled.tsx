import React from 'react'
import { IconProps } from './types.js'

export const IconWashSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-80H80v-441l385-250 65 65-78 126h348v80H480v60h400v80H480v60h360v80H480v60h280v80Zm-60-560q-39 0-69.5-30.5T600-740q0-35 23-77.5T700-920q54 60 77 102.5t23 77.5q0 39-30.5 69.5T700-640Z" />
  </svg>
)
