import React from 'react'
import { IconProps } from './types'

export const IconChargingStationSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M460-280v-160h-80l120-240v160h80L460-280ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z" />
  </svg>
)
