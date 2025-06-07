import React from 'react'
import { IconProps } from './types.js'

export const IconArrowMenuOpenOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-120v-720h80v720h-80Zm160-160v-400l200 200-200 200Z" />
  </svg>
)
