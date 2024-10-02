import React from 'react'
import { IconProps } from './types'

export const IconTabletSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-160v-640h880v640H40Zm200-80h480v-480H240v480Z" />
  </svg>
)
