import React from 'react'
import { IconProps } from './types'

export const IconDockToLeftSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-200h120v-560H640v560Zm-440 0h360v-560H200v560Zm440 0h120-120Zm-520 80v-720h720v720H120Z" />
  </svg>
)
