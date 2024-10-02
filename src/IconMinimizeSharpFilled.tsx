import React from 'react'
import { IconProps } from './types'

export const IconMinimizeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120v-80h480v80H240Z" />
  </svg>
)
