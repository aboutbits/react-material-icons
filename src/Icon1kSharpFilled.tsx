import React from 'react'
import { IconProps } from './types'

export const Icon1kSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-360h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm-140 0h60v-240H280v60h60v180ZM120-120v-720h720v720H120Z" />
  </svg>
)
