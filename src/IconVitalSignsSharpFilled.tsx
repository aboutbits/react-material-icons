import React from 'react'
import { IconProps } from './types'

export const IconVitalSignsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-440v-80h228l92 244 240-633 148 389h172v80H692l-92-244L360-51 212-440H40Z" />
  </svg>
)
