import React from 'react'
import { IconProps } from './types'

export const IconCalendarTodaySharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-720h120v-80h80v80h320v-80h80v80h120v720H120Zm80-80h560v-400H200v400Z" />
  </svg>
)
