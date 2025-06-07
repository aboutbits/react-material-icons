import React from 'react'
import { IconProps } from './types.js'

export const IconSubscriptionsOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm240-120 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280Z" />
  </svg>
)
