import React from 'react'
import { IconProps } from './types'

export const IconEastSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
  </svg>
)
