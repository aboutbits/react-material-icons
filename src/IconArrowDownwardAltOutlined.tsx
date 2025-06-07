import React from 'react'
import { IconProps } from './types.js'

export const IconArrowDownwardAltOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z" />
  </svg>
)
