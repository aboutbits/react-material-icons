import React from 'react'
import { IconProps } from './types'

export const IconSplitscreenVerticalAddSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h320v720H120Zm400 0v-720h320v484q-10-2-20-3t-20-1q-83 0-141.5 58T600-161q0 11 1 21t3 20h-84Zm240 80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)
