import React from 'react'
import { IconProps } from './types.js'

export const IconEventListSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-120v-320h320v320H560ZM80-240v-80h360v80H80Zm480-280v-320h320v320H560ZM80-640v-80h360v80H80Z" />
  </svg>
)
