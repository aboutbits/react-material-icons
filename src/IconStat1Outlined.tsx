import React from 'react'
import { IconProps } from './types'

export const IconStat1Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z" />
  </svg>
)
