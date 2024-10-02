import React from 'react'
import { IconProps } from './types'

export const IconCombineColumnsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h320v164q-70 14-115 69t-45 127q0 72 45 127t115 69v164H120Zm400 0v-164q70-14 115-69t45-127q0-72-45-127t-115-69v-164h320v720H520Zm-80-240v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)
