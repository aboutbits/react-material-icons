import React from 'react'
import { IconProps } from './types'

export const Icon1kPlusSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M660-400h40v-60h60v-40h-60v-60h-40v60h-60v40h60v60Zm-240 40h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm-120 0h60v-240H240v60h60v180ZM120-120v-720h720v720H120Z" />
  </svg>
)
