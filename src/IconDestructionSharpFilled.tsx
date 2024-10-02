import React from 'react'
import { IconProps } from './types'

export const IconDestructionSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-320h720v320H120Zm141-380L60-574l240-40-65-235 199 141 120-212 40 240 235-65-141 199 152 86H261Z" />
  </svg>
)
