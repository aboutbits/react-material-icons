import React from 'react'
import { IconProps } from './types.js'

export const IconSubscriptionsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-560h800v560H80Zm320-120 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280Z" />
  </svg>
)
