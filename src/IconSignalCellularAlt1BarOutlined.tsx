import React from 'react'
import { IconProps } from './types.js'

export const IconSignalCellularAlt1BarOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160v-240h120v240H200Z" />
  </svg>
)
