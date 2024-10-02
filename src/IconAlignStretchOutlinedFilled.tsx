import React from 'react'
import { IconProps } from './types'

export const IconAlignStretchOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-560v-240H80v-80h800v80H680v240H280ZM80-80v-80h200v-240h400v240h200v80H80Z" />
  </svg>
)
