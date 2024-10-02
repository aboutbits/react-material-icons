import React from 'react'
import { IconProps } from './types'

export const IconCalendarAddOnSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-80v-120H560v-80h120v-120h80v120h120v80H760v120h-80Zm-560-80v-640h120v-80h80v80h240v-80h80v80h120v324q-20-3-40-3t-40 3v-84H200v320h280q0 20 3 40t11 40H120Z" />
  </svg>
)
