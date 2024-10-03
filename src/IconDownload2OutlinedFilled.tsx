import React from 'react'
import { IconProps } from './types.js'

export const IconDownload2OutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-80h640v80H160Zm320-160L200-600h160v-280h240v280h160L480-240Z" />
  </svg>
)
