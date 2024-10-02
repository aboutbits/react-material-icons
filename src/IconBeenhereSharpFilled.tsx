import React from 'react'
import { IconProps } from './types'

export const IconBeenhereSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-40 160-280v-600h640v600L480-40Zm-42-320 226-226-56-58-170 170-84-84-58 56 142 142Z" />
  </svg>
)
