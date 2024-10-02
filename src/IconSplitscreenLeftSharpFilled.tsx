import React from 'react'
import { IconProps } from './types'

export const IconSplitscreenLeftSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h320v720H120Zm400 0v-720h320v720H520Zm240-640H600v560h160v-560Z" />
  </svg>
)
